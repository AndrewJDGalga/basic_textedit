import { useState } from 'react'
import CustButton from './CustButton';
import '../styling/index.css'

function App() {
  const [fileText, setFileText] = useState('');


  return (
    <>
      <section>
        <CustButton id="save" inner="&#128190;" func={()=>{}}></CustButton>
        <CustButton id="reset" inner="&#10227;" func={()=>{}}></CustButton>
        <CustButton id="load" inner="&#10581;" func={()=>{}}></CustButton>
      </section>
      <textarea value={fileText} onChange={e=>setFileText(e.target.value)} placeholder='Start typing or select &#10581; to load a .txt file...'></textarea>
      
    </>
  )
}

export default App
