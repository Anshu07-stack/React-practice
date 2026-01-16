import { useState } from 'react'
import './App.css'
import NavBar from './NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Help from './components/Help'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/help' element={<Help/>}/>
        </Routes>
    </> 
  )
}

export default App
