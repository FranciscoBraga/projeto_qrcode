import prompt from "prompt";
import promptQRCODE from "../../prompts_schema/prompt_schema.qrcode.js";
import handle from "./handle.js";




async function createQRCode() {
    prompt.get(promptQRCODE,handle)
    prompt.start()
}

export default createQRCode;