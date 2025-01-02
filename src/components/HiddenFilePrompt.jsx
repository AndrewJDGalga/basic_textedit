import { useImperativeHandle, useState } from "react"


function HiddenFilePrompt({nodeRef, newPath}) {
    const [path, setPath] = useState('');

    const onSetPath = (e) => {
        setPath(e.target.value);
        newPath(path);
    }

    return (
        <input id="file_selector" type="file" value={path} onChange={onSetPath} ref={nodeRef}></input>
    )
}

export default HiddenFilePrompt