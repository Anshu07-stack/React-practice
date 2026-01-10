import React from 'react'

const Button = (props) => {
  return (
    <div className='bg-blue-500 text-white rounded-lg px-2 py-1'>
      {props.text}
    </div>
  )
}

export default Button
