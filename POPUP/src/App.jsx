import { useState } from 'react'
import './App.css'
import Popup from './Popup'

function App() {
  const [pop, setpop] = useState(false)
  const [editpop, seteditpop] = useState(false)
  return (
    <>
      <button className='bg-black ' onClick={() => {
        seteditpop(true)
      }}>EDIT POPUP</button>
      <Popup
        pop={editpop} setpop={seteditpop}
        title={'edit'}
        description={'Are you sure you want to edit'}
      />




      <button className='bg-black ' onClick={() => {
        setpop(true)
      }}>DELETE POPUP</button> 
      <Popup
        pop={pop} setpop={setpop} 
        title={'Delete'}
        description={'Are you sure you want to delete'}
      />
    </>
  )
}

export default App
