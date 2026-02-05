import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Buttons from './components/Buttons'
import UploadFile from './components/UploadFile'
import SearchBar from './components/SearchBar'


function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Buttons/>
    <UploadFile/>
    <SearchBar/>
    
   </div>
  )
}

export default App
