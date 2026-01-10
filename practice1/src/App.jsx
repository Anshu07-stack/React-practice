import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './User'
import Bio from './Bio'
import ChildComp from './ChildComp'


function App() {
  // const [count, setCount] = useState(0)
  const [show,setShow] = useState(false)

  return (
   <>
   {/* <h1>hello : {count}</h1>
   <User/>
   <button onClick={()=>setCount(count+1)}>increase</button>
   <button onClick={()=>{
    if(count>0){
      setCount(count-1)
    }
   }}>decrease</button>
   <button onClick={()=>setCount(0)}>reset</button> */}


      <button onClick={()=>setShow(!show)}>
         {show ? 'hide' : 'show'} </button>
         {show && <Bio/>}

         <ChildComp name={['anshu','himanshu']}/>

         <User>
          <div>hello anshu</div>
         </User>

   </>
  )
}

export default App
