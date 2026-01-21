import { useState } from 'react'
import './App.css'
import {useSelector,useDispatch} from 'react-redux'
import { addToProduct, increment } from './reduxx/action/productAction'
import Products from './Products'
function App() {

  const dispatch = useDispatch()

  // const state = useSelector((state)=>{
  //   return state
  // })
  // console.log(state)

  const handleAddtoProduct = ()=>{
      dispatch(addToProduct({
        id:1,
        name:'samsung'
      }))
  }

  const handleIncrement = ()=>{
    dispatch(increment())
  }

  return (
   <>
      <div className='bg-red-500'>hello</div>
      <button onClick={handleAddtoProduct}>click</button>
      <button onClick={handleIncrement}>count</button>

      <Products/>
   </>
  )
}

export default App
