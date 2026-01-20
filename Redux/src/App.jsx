import { useState } from 'react'
import './App.css'
import {useSelector,useDispatch} from 'react-redux'
import { addToProduct } from './reduxx/action/productAction'
function App() {
  const dispatch = useDispatch()
  const state = useSelector((state)=>{
    return state
  })
  console.log(state)

  return (
   <>
      <div className='bg-red-500'>hello</div>
      <button onClick={()=>dispatch(addToProduct())}>click</button>
   </>
  )
}

export default App
