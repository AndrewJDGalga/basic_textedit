import { useState } from 'react'
import '../styling/index.css'

function App() {
  const [fileText, setFileText] = useState('Test text');

  return (
    <>
      {/*fileText !== '' && <textarea value={fileText}></textarea>*/}
      <textarea value={fileText}></textarea>
    </>
  )
}

export default App
