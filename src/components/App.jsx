import { useState } from 'react'
import '../styling/index.css'

function App() {
  const [fileText, setFileText] = useState('Test text');


  return (
    <>
      {/*fileText !== '' && <textarea value={fileText}></textarea>*/}
      <section>
        <button id="save">&#128190;</button>
        <button id="reset">&#10227;</button>
      </section>
      <textarea value={fileText} onChange={e=>setFileText(e.target.value)}></textarea>
      
    </>
  )
}

export default App
