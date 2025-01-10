import { useRef, useState } from 'react'
import CustButton from './CustButton';
import '../styling/index.css'
import HiddenFilePrompt from './HiddenFilePrompt';

function App() {
    const [fileText, setFileText] = useState('');
    const [path, setPath] = useState('');
    const hiddenFilePath = useRef(null);

    const resetState = () => {
        setPath('');
        setFileText('');
    }

    return (
        <>
            <section>
                <HiddenFilePrompt nodeRef={hiddenFilePath} newText={setFileText} path={path} setPath={setPath}></HiddenFilePrompt>
                <CustButton id="save" inner="&#128190;" func={() => { }}></CustButton>
                <button id="reset" onClick={resetState}>&#10227;</button>
                <CustButton id="load" inner="&#10583;" func={() => { hiddenFilePath.current.click() }}></CustButton>
            </section>
            <textarea value={fileText} onChange={e => setFileText(e.target.value)} placeholder='Click inside this box and start typing. OR, select &#10583; in the left-side menu to load a .txt file...'></textarea>
        </>
    )
}

export default App
