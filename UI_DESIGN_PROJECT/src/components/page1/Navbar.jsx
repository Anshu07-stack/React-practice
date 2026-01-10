import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-15 py-12'>
      <h4 className='bg-black text-white py-1.5 px-5 rounded-full uppercase'>Target Audience</h4>
      <button
       className='bg-gray-400 px-5 py-2 rounded-full uppercase tracking-widest text-sm'>
        Digital Banking Platform
        </button>
    </div>
  )
}

export default Navbar
