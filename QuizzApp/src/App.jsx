import { useState } from 'react'
import './App.css'
import Timer from './components/Timer'
import Questions from './components/Questions'
import Result from './components/result'

function App() {

  const [isOver , setisOver] = useState(false)
  const [score, setscore] = useState(0)

  return (
    <>
     {!isOver ? ( 
      <>
       <Timer  setisOver={setisOver}/>
      <Questions setscore={setscore} setisOver={setisOver}/>
      </>
      ) : (<Result score={score}/>)}
    </>
  )
}

export default App
