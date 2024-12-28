import { useState } from 'react'
import '../styling/index.css'

function App() {
  const [fileText, setFileText] = useState('Test text');


  return (
    <>
      {/*fileText !== '' && <textarea value={fileText}></textarea>*/}
      <textarea value={fileText} onChange={e=>setFileText(e.target.value)}></textarea>
    </>
  )
}

export default App
