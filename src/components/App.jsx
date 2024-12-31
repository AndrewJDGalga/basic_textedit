import { useState } from 'react'
import CustButton from './CustButton';
import '../styling/index.css'

function resetStrings(...stringSetters) {
    for(let setter of stringSetters) setter('');
}


function App() {
    const [filePath, setFilePath] = useState('');
    const [fileText, setFileText] = useState('');

    return (
        <>
            <section>
                <CustButton id="save" inner="&#128190;" func={() => { }}></CustButton>
                <CustButton id="reset" inner="&#10227;" func={() => { resetStrings(setFilePath, setFileText) }}></CustButton>
                <CustButton id="load" inner="&#10581;" func={() => { }}></CustButton>
            </section>
            <textarea value={fileText} onChange={e => setFileText(e.target.value)} placeholder='Click inside this box and start typing. OR, select &#10581; in the left-side menu to load a .txt file...'></textarea>

        </>
    )
}

export default App
