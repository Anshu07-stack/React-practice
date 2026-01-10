import React from 'react'

const Button = ({ color, setselectedColor,children }) => {

  function setcolor() {
      setselectedColor(color);

  }
  return (
    <div >
      <button onClick={setcolor} style={
        {
          backgroundColor: color,
          color: 'white'
        }
      }>{children}</button>
    </div>
  )
}

export default Button
