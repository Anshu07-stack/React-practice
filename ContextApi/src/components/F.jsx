import React, { useContext } from 'react'
import { useMyContext } from '../MyContext'

const F = () => {
const  {setCount} = useMyContext()

  return (
    <div className='bg-purple-800 p-10'>
      F
     <button onClick={()=>setCount(prev=>prev+1)}>click</button>
    </div>
  )
}

export default F
