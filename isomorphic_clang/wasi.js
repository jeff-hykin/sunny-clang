import * as wasmerWasi from "https://esm.sh/@wasmer/wasi"
await wasmerWasi.init()
export default wasmerWasi.WASI