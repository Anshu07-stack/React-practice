import React from 'react'
import 'remixicon/fonts/remixicon.css'
import HeroLeft from './HeroLeft'
import Arrow from './Arrow'

const LeftContent = () => {
  return (
    <div className='h-full flex flex-col justify-between w-1/3 p-2  '>
     
      <HeroLeft/>
      <Arrow/>
      
    </div>
  )
}

export default LeftContent
