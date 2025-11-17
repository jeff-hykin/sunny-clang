// __proto__ fix for deno, see: https://github.com/jeff-hykin/deno_proto_shim/blob/master/readme.md
import "https://raw.githubusercontent.com/jeff-hykin/deno_proto_shim/2056dfa77bd58ae826d5deedda1a5020717dda9c/main.js"
import { WASI, init } from "https://esm.sh/@wasmer/wasi@v1.2.2"
import { WasmFs } from "https://esm.sh/@wasmer/wasmfs@v1.2.2"
import { recursivelyOwnKeysOf } from 'https://esm.sh/gh/jeff-hykin/good-js@1.18.2.0/source/flattened/recursively_own_keys_of.js'
import { isPureObject } from 'https://esm.sh/gh/jeff-hykin/good-js@1.18.2.0/source/flattened/is_pure_object.js'
import { Buffer } from "https://esm.sh/gh/jeff-hykin/xcc_deno@540e29b/main/node_shims/buffer.js"

// wasmer needs a buffer shim to init
if (!globalThis.Buffer) {
    globalThis.Buffer = Buffer
}

export class Exit extends Error {
    constructor(code) {
        super(`Process exited with code ${code}`);
        this.code = code;
    }
}

function recursiveFsObjectCallback(fsObject, callback, parent="/") {
    for (const [key, value] of Object.entries(fsObject)) {
        const path = parent + "/" + key
        if (typeof value == 'string' || value instanceof Uint8Array) {
            callback('file', path, value)
        } else {
            callback('dir', path, value)
            recursiveFsObjectCallback(value, callback, path + "/")
        }
    }
}
// fs.rmSync(dir, { recursive: true, force: true });

export const isProxyFs = Symbol('isProxyFs')
export function makeFileSystemObject(fsObject={}) {
    fsObject = structuredClone(fsObject)
    const wasmFs = new WasmFs()
    // init the filesystem
    recursiveFsObjectCallback(fsObject, (type, path, value) => {
        if (type == 'file') {
            wasmFs.fs.writeFileSync(path, value)
        }
        if (type == 'dir') {
            wasmFs.fs.mkdirSync(path)
        }
    })
    
    const subProxies = {}
    function ensureSubProxy(object, parentPath) {
        if (!subProxies[parentPath]) {
            subProxies[parentPath] = new Proxy(object, {
                ownKeys(original, ...args) {
                    return Reflect.ownKeys(original, ...args)
                },
                getOwnPropertyDescriptor(original, prop) {
                    return Reflect.getOwnPropertyDescriptor(original, prop)
                },
                get(original, key) {
                    if (key == isProxyFs) {
                        return wasmFs
                    }
                    const result = Reflect.get(original, key)
                    if (typeof result == 'string' || result instanceof Uint8Array) {
                        return result
                    } else if (result instanceof Object) {
                        return ensureSubProxy(result, parentPath + "/" + key)
                    }
                    return result // probably undefined
                },
                set(original, key, value) {
                    if (typeof key == 'symbol') {
                        return Reflect.set(original, key, value)
                    }
                    // check for overwrite
                    const existing = original[key]
                    const existingWasDir = existing instanceof Object && !(existing instanceof Uint8Array)
                    if (existingWasDir) {
                        const path = parentPath + "/" + key
                        // remove folder first
                        wasmFs.fs.rmSync(path, { recursive: true, force: true })
                        delete subProxies[path]
                    }

                    // setting a file
                    if (typeof value == 'string' || value instanceof Uint8Array) {
                        // write/overwrite file
                        wasmFs.fs.writeFileSync(parentPath + "/" + key, value)
                    // setting a folder
                    } else {
                        // always an empty dir because we delete it just before now
                        // TODO: there is probably a way to use diffing to potentially make this more efficient
                        const emptyDir = ensureSubProxy(result, parentPath + "/" + key)
                        for (const [key, value] of Object.entries(value)) {
                            // no need to handle the object case of value because the setter will handle it
                            emptyDir[key] = value
                        }
                        // changes on the object would not be reflected in the wasmFs, they'll have to use the proxy
                        // this design choice could be debated
                        Object.freeze(value) // thanks to the proxy above this freeze is recursive
                    }
                    // always set the value, not the proxy-object of the value
                    return Reflect.set(original, key, value)
                },
                deleteProperty(original, key) {
                    wasmFs.fs.rmSync(parentPath + "/" + key, { recursive: true, force: true })
                    Reflect.deleteProperty(original, key)
                },
            })
        }
        return subProxies[parentPath]
    }

    // create a proxy that keeps the wasmFs up to date
    return ensureSubProxy(fsObject, "/")
}


// let wasmerReady = false // promise or boolean
// export function makeYoWasiFunc(bytesOrModule) {
//     if (!wasmerReady) {
//         wasmerReady = init()
//     }
//     let module = bytesOrModule
//     if (bytesOrModule instanceof Uint8Array) {
//         module = WebAssembly.compile(bytesOrModule)
//     }
//     const modulePromise = Promise.resolve(module)

//     // in-memory filesystem
//     var wasmFs = new WasmFs()
//     // const filesOut = await runX(args, filesIn, { stdin, stdout, stderr, decodeASCII, fetchProgress });
//     // stdin(byteLength) // return Uint8Array
//     // stdout(bytes)
//     // fetchProgress({ source, totalLength, doneLength })
//     return async function(args, filesIn={}, { stdin, stdout, stderr, decodeASCII, fetchProgress, synchronous = false }={}) {
//         if (wasmerReady instanceof Promise) {
//             await wasmerReady
//         }
//         const module = await modulePromise
//         const wasi = new WASI({
//             args,
//             env,
//             bindings: {
//                 ...WASI.defaultBindings,
//                 fs: wasmFs.fs,
//             },
//         })
//         wasi.start(instance)
        
//         // init the filesystem
//         recursiveFsObjectCallback(filesIn, (type, path, value) => {
//             if (type == 'file') {
//                 wasmFs.fs.writeFileSync(path, value)
//             }
//             if (type == 'dir') {
//                 wasmFs.fs.mkdirSync(path)
//             }
//         })
        
//         // wasi
//         return {
            
//         }
//     }
    
// }