import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'

const FetchData = () => {
     const [users, setUsers] = useState([])
  const [userDetails, setUserDetails] = useState({
    name: '',
    age: ''
  })


  const HandleOnchange = (e) => {
    const { name, value } = e.target;
    setUserDetails(previousDetails => {
      return {
        ...previousDetails,
        [name]: value
      }
    })
  }

  const fetchData = async () => {
    const response = await axios({
      url: 'https://69401a4b993d68afba6afc4e.mockapi.io/users'
    })
    setUsers(response.data)
  }


  const postData = async () => {
    if (userDetails.name === '' || userDetails.age === '') {
      alert('Please fill all the details');
      return;
    }
    await axios({
      url: 'https://69401a4b993d68afba6afc4e.mockapi.io/users',
      method: 'post',
      data: userDetails
    })
    setUserDetails({
      name: '',
      age: ''
    })
    fetchData();
  }

  const editData = async (userDetails) => {
    await axios({
      url: `https://69401a4b993d68afba6afc4e.mockapi.io/users/${userDetails.id}`,
      method: 'put',
      data: userDetails
    })
    setUserDetails({
      name: '',
      age: ''
    })
    fetchData();
  }

  const deleteUser = async (id)=>{
     await axios.delete(`https://69401a4b993d68afba6afc4e.mockapi.io/users/${id}`)
    fetchData();
  }
  useEffect(() => {
    fetchData();

  }, [])
  return (
    <div>
       {/* <button onClick={fetchData}>Fetch data</button> */}
        <input 
        className='outline-none bg-gray-300 text-black rounded-lg p-3'
        type="text" placeholder='Enter Name' onChange={HandleOnchange} name='name'
          value={userDetails.name}
        />
        <br />
        <br />
        <input 
        className='outline-none bg-gray-300 text-black rounded-lg p-3' 
        type="number" placeholder='Enter Age' onChange={HandleOnchange} name='age'
          value={userDetails.age}
        />
        <br />
        <br />
        {userDetails.editMode ?
          (
            <button onClick={() => editData(userDetails)}>Save Data</button>
          )
          :
          (
            <button onClick={postData}>Post Data</button>

          )}
          <br /><br />
          <hr />
        {/* <button onClick={postData}>Post Data</button> */}
        {users.map((data) => {
          return (
            <div className='bg-gray-500 p-6 rounded-xl my-2' key={data.id}>
              <p>Name: {data.name}</p>
              <p>Age: {data.age}</p>
              <button
              className='mr-3 mt-5'
              onClick={() => setUserDetails({ ...data, editMode: true })}>Edit</button>
              <button onClick={()=>deleteUser(data.id)}>delete</button>
              
            </div>
          )
        })}
    </div>
  )
}

export default FetchData
