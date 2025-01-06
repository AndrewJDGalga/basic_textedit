import { useImperativeHandle, useState } from "react"

function HiddenFilePrompt({nodeRef, newText}) {
    const [path, setPath] = useState('');

    const onSetPath = (e) => {
        setPath(e.target.value);

        const fileData = e.target.files[0];

        const reader = new FileReader();
        reader.onprogress = (e) => {
            console.log('loading...');
        }
        reader.onload = (e) => {
            //console.log(e.target.result);
            //setPath(e.target.result);
            console.log('complete');
            newText(e.target.result);
        }
        reader.readAsText(fileData);

        //newText(path);
    }

    return (
        <input id="file_selector" type="file" value={path} onChange={onSetPath}  ref={nodeRef} accept="text/plain"></input>
    )
}

export default HiddenFilePrompt