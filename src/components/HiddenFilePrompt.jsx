import { useState } from "react"

function HiddenFilePrompt({nodeRef, path, loadFile}) {
    return (
        <input id="file_selector" type="file" value={path} onChange={loadFile}  ref={nodeRef} accept="text/plain"></input>
    )
}

export default HiddenFilePrompt