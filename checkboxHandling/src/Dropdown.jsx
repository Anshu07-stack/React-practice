import React, { useState } from 'react'

const Dropdown = () => {
    // const [paymentMode, setPaymentMode] = useState('')
    // console.log(paymentMode);
    const [language,setLanguage] = useState('')
    const languages = ['html','css','js','react','angular','vue']
    return (
    <div>
        <select value={language} onChange={(e)=>setLanguage(e.target.value)}>
            <option value="">--select below--</option>
           {languages.map((item)=>{
            return(
                <option key={item} value={item}>{item.toUpperCase()}</option>
            )
           })}
        </select>
    </div>
  )
}

export default Dropdown
