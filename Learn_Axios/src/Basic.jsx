import React from 'react'
import axios from 'axios'

const Basic = () => {
     const config = {
    url: 'https://jsonplaceholder.typicode.com/users'
  }
  const fetchData = async ()=>{
     const response =   await axios(config) 
     console.log(response)
  }   
  return (
    <div>
        <button onClick={fetchData}>Fetch deta</button>
      </div>
  )
}

export default Basic
