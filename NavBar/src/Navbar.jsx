import React, { useState } from 'react'
import { RiMenuFold4Fill } from "react-icons/ri";

const Navbar = () => {

    const [mobileView , setmobileView] = useState(false)
    return (
        <div className='flex justify-between w-full items-center px-[1rem] py-[2rem] bg-[lightseagreen]'>
            <h1 className='text-2xl font-bold'>logo</h1>
            <div className='flex items-center gap-9 text-lg max-[720px]:hidden'>
                <a href="">HOME</a>
                <a href="">ABOUT</a>
                <a href="">CONTACT</a>
                <a href="">SERVICE</a>
                <a href="">HELP</a>
            </div>
 
            <div className='text-2xl flex items-center gap-5'>
                <span>🛒</span>
                <span>🛒</span>
                <RiMenuFold4Fill className='min-[720px]:hidden text-4xl' 
                  onClick={()=>{
                    setmobileView(!mobileView)
                  }}
                />
                
            </div>


            {/* MOBILE VIEW */}

           
                <div className={`absolute top-0 left-0 h-screen bg-black w-[20rem] flex flex-col ${  mobileView  ?  '-translate-x-[0%]':  '-translate-x-[100%]' }  transition-all duration-600  `}>
               
               <button  
                onClick={()=>{
                    setmobileView(false)
                }}              
               className='bg-[#242424] absolute top-[2rem] right-[2rem] rounded-2xl p-3'>❌</button>

                <a href="" className=' mt-[5.5rem] flex items-center justify-center p-5 hover:bg-[#252323]'>HOME</a>
               <a href="" className='flex items-center justify-center p-5 hover:bg-[#4f4848]'>ABOUT</a>
               <a href="" className='flex items-center justify-center p-5 hover:bg-[#252323]'>CONTACT</a>
               <a href="" className='flex items-center justify-center p-5 hover:bg-[#252323]'>SERVICE</a>
               <a href="" className='flex items-center justify-center p-5 hover:bg-[#252323]'>HELP</a>
            </div>
            
 
        </div>
    )
}

export default Navbar
