import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  
  
  return (
    <div className='px-18 h-[80vh] flex justify-between items-center gap-5 py-2'>
      <LeftContent/>
      <RightContent users={props.users}/>
    </div>
  )
}

export default Page1Content
