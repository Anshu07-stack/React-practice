import React, { useEffect, useRef, useState } from 'react'

const UserefBasic = () => {
    const [randomNumber, setRandomNumber] = useState(0);

    const renderCount = useRef(0)
    
    const generateRandomNumber = ()=>{
        const num = Math.floor(Math.random()*100);
        setRandomNumber(num)
    }
    useEffect(()=>{
        console.log("re render trigger hua ");
        renderCount.current += 1;
    })
  return (
    <div>
        <h1>{randomNumber}</h1>
        <h1>Re-render-count: {renderCount.current}</h1>
      <button onClick={generateRandomNumber}>GENERATE RANDOM NUMBER</button>
    </div>
  )
}

export default UserefBasic
