import React, { Children, useState } from 'react'

const User = ({children}) => {
    // const [name,setName] = useState('Anshu');
    // const namechanged = (changed)=>{
    //   setName((changed)=>changed === 'anshu'? 'himanshu':'anshu')
    // }
    
  return (
    <div>
       {/* <h1>NAME: {name}</h1>
       <button onClick={()=>{
        if(name === 'Anshu'){
          setName('himanshu')
        }else{
          setName('Anshu')
        }
       }}>change karo </button> */}

       <h1>Username : </h1> 
       <div>{children}</div>
    </div>
  )
}

export default User
