import React, { useState } from 'react'

const RadioQn = () => {
    const [selectedMode , setSelectedMode] = useState('UPI')
    console.log("selected",selectedMode);
    
    const payments = [
        {id:"UPI", info:"instant transfer via upi apps"},
        {id:"CARD", info:"pay using credit or debit cards"},
        {id:"COD",  info:"pay when the order arrives" }
    ]

    console.log( );
    
  return (
    <div>
      {payments.map(item=>{
        return(
            <label key={item.id} htmlFor={item.id}>
                <input
                id={item.id}
                name='payments'
                 type="radio" 
                 value={item.id}
                 checked={selectedMode===item.id}
                 onChange={(e)=>setSelectedMode(e.target.value)}
                 />
                 {item.id}
            </label>
        )
      })}
      <p>MODE OF PAYMENT : {selectedMode}</p>
      <p>DETAILS : {payments.find(obj=> obj.id===selectedMode).info} </p>
    </div>
  )
}

export default RadioQn
