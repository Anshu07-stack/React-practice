import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import A from './components/A'
import B from './components/B'



// import G from './G'


function App() {


  return (
    <>
     <div className='bg-red-600  p-10'>
      App
      
      <A/>
      <B/>
{/*   <G/> */}
      </div>
    </>
  )
}

export default App
