import React, { useContext } from 'react'

import { useMyContext } from '../MyContext'
const C = () => {
  const {count} = useMyContext()
  return (
    <div className='bg-green-500 p-10'>
      C
      {count}
    </div>
  )
}

export default C
