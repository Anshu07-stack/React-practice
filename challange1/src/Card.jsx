import React from 'react'
import Button from './Button';
import { FaYoutube } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
const Card = ({name,role}) => {
  return (
    <div>
      <div className=' shadow-2xl rounded-lg overflow-hidden'>
        <div className='w-full aspect-video bg-blue-500 relative'>
          <img className='h-full rounded-full aspect-square object-cover absolute 
          left-[50%] -translate-x-1/2 translate-y-1/4 border-5 p-1 bg-white border-blue-500' src="https://static.vectorcharacters.net/uploads/2013/03/Schoolboy_Vector_Character_Preview.jpg" alt="error loading img" />
        </div>




        <div className='flex flex-col items-center pt-[4rem] pb-[1.5rem]'>
          <h1 className='text-2xl font-bold'>{name}</h1>
          <p className='my-2 text-[0.8rem]'>{role}</p>
          <div className='flex gap-[1rem] '>
            <FaYoutube className='bg-red-500 text-white p-1 text-4xl rounded-full ' />
            <FaYoutube className='bg-red-500  text-white p-1 text-4xl rounded-full' />
            <FaYoutube className='bg-red-500  text-white p-1 text-4xl rounded-full' />
            <FaYoutube className='bg-red-500  text-white p-1 text-4xl rounded-full' />

          </div>
          <div className='flex gap-[2rem] my-[1rem]'>
            <Button text='Subscribe' />
            <Button text='Message' />
          </div>


          <div className='flex items-center gap-[0.5rem]'>

          <div className='flex items-center text-xl'>
                <CiHeart/>
                <span>60.4k</span>
          </div>
          <Line/>
          <div className='flex items-center text-xl'>
                <CiHeart/>
                <span>60.4k</span>
          </div>
          <Line/>
          <div className='flex items-center text-xl'>
                <CiHeart/>
                <span>60.4k</span>
          </div>

          </div>


        </div>
      </div>
    </div>
  )
}



const Line = () => {
  return (
    <div className='w-[1.5px] h-[1.3rem] bg-black/50'>
    </div>
  )
}




export default Card
