import { useState } from "react"

function HiddenFilePrompt({nodeRef, newText}) {
    const [path, setPath] = useState('');

    const onSetPath = (e) => {
        setPath(e.target.value);

        const fileData = e.target.files[0];

        const reader = new FileReader();
        reader.onloadstart = () => {
            newText('loading...');
        }
        reader.onload = (e) => {
            newText(e.target.result);
        }
        reader.readAsText(fileData);
    }

    return (
        <input id="file_selector" type="file" value={path} onChange={onSetPath}  ref={nodeRef} accept="text/plain"></input>
    )
}

export default HiddenFilePrompt