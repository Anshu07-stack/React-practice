import React from 'react'

const ColorBox = ({color}) => {
  return (
    <div
    style={
      {
        backgroundColor: color,
      }
    } 
    className='w-[300px] h-[300px]  rounded-lg content-center text-white m-auto border-2'>
      {color.toUpperCase()}
    </div>
  )
}

export default ColorBox
