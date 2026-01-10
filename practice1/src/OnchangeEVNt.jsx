import React, { use, useState } from 'react'

const OnchangeEVNt = () => {
    const [txt,setTxt] = useState('');
  return (
    <div>
      <input type="text" value={txt}
      onChange={(e)=>setTxt(e.target.value)}
      placeholder='enter text here ' />
      <h3> your values :{txt}  </h3>
    </div>
  )
}

export default OnchangeEVNt
