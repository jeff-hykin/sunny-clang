#!/usr/bin/env -S deno run --allow-all
import { FileSystem, glob } from "https://deno.land/x/quickr@0.8.6/main/file_system.js"
import $ from "https://esm.sh/@jsr/david__dax@0.43.2/mod.ts"
const $$ = (...args)=>$(...args).noThrow()
// await $$`false`
// (await $$`false`).code
// await $$`false`.text("stderr")
// await $$`false`.text("combined")
// await $$`echo`.stdinText("yes\n")

const clangFolder = `${FileSystem.thisFolder}/../isomorphic_clang`
FileSystem.sync.ensureIsFolder(clangFolder)
await $$`deno run -A https://raw.githubusercontent.com/jeff-hykin/offline_fetch_shim/0.1.0.1/cli.js`.cwd(clangFolder)
// 
// trigger the fetch calls for the recently downloaded clang
// 
var { runClang } = await import(`${clangFolder}/@yowasp_clang.recorder.js`)
const { howdy } = await runClang(['clang++', 'test.cc', '-o', 'howdy'], {"test.cc": `#include <iostream>\nint main() { std::cout << "howdy++" << std::endl; }`});
console.log(`Okay clang should be cached into an offline cache at ${clangFolder}`)
console.log(`Testing import of cached clang... if everthing is working, this should print "howdy++"`)
var { runClang } = await import(`${clangFolder}/@yowasp_clang.replayer.js`)
const { howdy } = await runClang(['clang++', 'test.cc', '-o', 'howdy'], {"test.cc": `#include <iostream>\nint main() { std::cout << "howdy++" << std::endl; }`});
import { WASI } from 'node:wasi';
const wasi = new WASI({ version: 'preview1' });
const module = await WebAssembly.compile(meow);
const instance = await WebAssembly.instantiate(module, {wasi_snapshot_preview1: wasi.wasiImport});
wasi.start(instance);