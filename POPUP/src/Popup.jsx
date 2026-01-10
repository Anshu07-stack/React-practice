import React from 'react'

const Popup = ({pop,setpop,title , description}) => {


    return (
        <div>
            {
                pop && (
                    <div className='absolute top-0 left-0 w-screen h-screen  bg-black/50 flex items-center justify-center'>
                        <button
                            onClick={() => { setpop(false) }}
                            className=' absolute top-[2rem] right-[2rem]'>❌</button>

                        <div className='w-full h-full max-w-[40rem] max-h-[20rem] bg-[#242424] rounded-2xl p-5 flex justify-center flex-col items-center '>
                            <h1 className='text-white text-2xl my-1'>⚠️{title}</h1>
                            <p className='text-white text-lg my-5' >{description} </p>

                            <div className='flex gap-10'>
                                <button className='bg-[tomato]'>Yes</button>
                                <button className='bg-green-500'>No</button>
                            </div>
                        </div>
                    </div>
                )
            }

        </div>
    )
}

export default Popup
