#!/usr/bin/env -S deno run --allow-all
import $ from "https://esm.sh/@jsr/david__dax@0.43.2/mod.ts"
const $$ = (...args)=>$(...args).noThrow()
// await $$`false`
// (await $$`false`).code
// await $$`false`.text("stderr")
// await $$`false`.text("combined")
// await $$`echo`.stdinText("yes\n")

let bundlerPromise = $$`deno bundle --allow-import --watch src/index.jsx --outdir build/`.spawn()
let serverPromise = $$`deno run -A https://deno.land/x/archaeopteryx/mod.ts ./build`.spawn()