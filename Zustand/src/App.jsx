import React from 'react'
import useMystore from './store'
import Navbar from './components/Navbar'

const App = () => {
  const data = useMystore()
  return (
    <div className='bg-red-500'>
     <Navbar/>
    </div>
  )
}

export default App
