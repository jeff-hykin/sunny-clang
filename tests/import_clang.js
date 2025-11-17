#!/usr/bin/env -S deno run --allow-all
import { runClang } from "../isomorphic_clang/@yowasp_clang.replayer.js"
// import { runClang } from 'https://esm.sh/@yowasp/clang';
// import { runClang } from 'https://cdn.jsdelivr.net/npm/@yowasp/clang/gen/bundle.js';
var { meow } = await runClang(["clang++", "test.cc", "-o", "meow"], { "test.cc": `#include <iostream>\nint main() { std::cout << "meow++" << std::endl; }` })
var module = await WebAssembly.compile(meow)

// deno doesn't support node wasi yet
    // import { WASI } from 'node:wasi';
    // const wasi = new WASI({ version: 'preview1' });
    // const instance = await WebAssembly.instantiate(module, {wasi_snapshot_preview1: wasi.wasiImport});
    // wasi.start(instance);
    // prints "meow++"

// deno snapshot_preview1.ts doesn't seem to work
    // // import Context from "https://deno.land/std@0.206.0/wasi/snapshot_preview1.ts"
    // import Context from "./snapshot_preview1.ts"
    // var context = new Context({
    //     args: ["My Silly WASM CLI", ...Deno.args],
    //     env: {...Deno.env.toObject()}, 
    // })
    // var instance = await WebAssembly.instantiate(
    //     module, { "wasi_snapshot_preview1": context.exports, }
    // )
    // context.start(instance)
    // // doesn't print or error, and there's no helpers to getStdout or something like that

// latest wasmer/wasi (unfortunately still like 2022/2023)
    // shim needed to work on deno
    import "https://raw.githubusercontent.com/jeff-hykin/deno_proto_shim/2056dfa77bd58ae826d5deedda1a5020717dda9c/main.js"
    // import { WASI, init } from "https://esm.sh/@wasmer/wasi?target=esnext"
    import { WASI, init } from "https://cdn.jsdelivr.net/npm/@wasmer/wasi/dist/Library.esm.js"
    // instance = await WebAssembly.instantiate(module, {wasi_snapshot_preview1: wasi.wasiImport})
    // https://cdn.jsdelivr.net/npm/@wasmer/wasi/
    // import { WasmFs } from "https://esm.sh/@wasmer/wasmfs?target=esnext"
    var wasmFs = new WasmFs()
    var wasi = new WASI({
        // args: ["My Silly WASM CLI", ...Deno.args],
        // env: Deno.env.toObject(),
        args: Deno.args,
        env: {...Deno.env.toObject()},
        bindings: {
            // ...WASI.defaultBindings,
            // fs: wasmFs.fs,
        },
    })
    var instance = await WebAssembly.instantiate(module, {wasi_snapshot_preview1: wasi.getImports(module).wasi_snapshot_preview1})
    // NOTE: can only run once per WASM object
    var exitCode = wasi.start(instance)
    console.debug(`wasi.getStdoutString() is:`,wasi.getStdoutString())