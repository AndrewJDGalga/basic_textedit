import { useRef, useState } from 'react'
import CustButton from './CustButton';
import '../styling/index.css'
import HiddenFilePrompt from './HiddenFilePrompt';

function resetStrings(...stringSetters) {
    for(let setter of stringSetters) setter('');
}

function loadFile(selector, contentsSetter, locationStringSetter){
    selector.current.click();
    selector.current.value;
}



function App() {
    const [filePath, setFilePath] = useState('');
    const [fileText, setFileText] = useState('');

    const HFP = useRef(null);

    return (
        <>
            <section>
                <HiddenFilePrompt nodeRef={HFP} filePath={setFilePath}></HiddenFilePrompt>
                <CustButton id="save" inner="&#128190;" func={() => { }}></CustButton>
                <CustButton id="reset" inner="&#10227;" func={() => { resetStrings(setFilePath, setFileText) }}></CustButton>
                {/*<CustButton id="load" inner="&#10583;" func={() => { loadFile(fileSelector, setFileText, setFilePath) }}></CustButton>*/}
                <CustButton id="load" inner="&#10583;" func={() => { HFP.current.click() }}></CustButton>
            </section>
            <textarea value={fileText} onChange={e => setFileText(e.target.value)} placeholder='Click inside this box and start typing. OR, select &#10583; in the left-side menu to load a .txt file...'></textarea>

        </>
    )
}

export default App
