import React, { useRef } from 'react'

const UserefHook = () => {
    const focus = useRef()
    const handleFocus = ()=>{
        focus.current.focus()
    }

  return (
    <div>
      <input ref={focus} 
      type="text"  
      placeholder='enter text '
      />
      <button onClick={handleFocus}>focus</button>
    </div>
  )
}

export default UserefHook
