import { useEffect, useState } from 'react'
import './App.css'
import { axiosInstance } from './axios'

function App() {
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
    const response = await axiosInstance.get('/users',{
      // onDownloadProgress:(progress)=>{
      //   console.log(progress)
      // }
    })
    setUsers(response.data)
  }


  const postData = async () => {
    if (userDetails.name === '' || userDetails.age === '') {
      alert('Please fill all the details');
      return;
    }
    await axiosInstance.post('/users', userDetails, {
      headers:{
        'Content-Type': 'application/json'
      }, 
      // onUploadProgress:(progress)=>{
      //   console.log(progress  )
      // }
    })
    setUserDetails({
      name: '',
      age: ''
    })
    fetchData();
  }

  const editData = async (userDetails) => {
    await axiosInstance.put(`/${userDetails.id}`, userDetails)
    setUserDetails({
      name: '',
      age: ''
    })
    fetchData();
  }

  const deleteUser = async (id) => {
    await axiosInstance.delete(`/users/${id}`)
    fetchData();
  }
  useEffect(() => {
    // for request 
    // axios.interceptors.request.use((config) => {
    //   config.headers.Authorization = "Bearer xyz"

    //   console.log(config);
    //   return config;
    // },(error)=>{
    //   console.log('Global error:',error);
    //   return Promise.reject(error)
    // })

    // for response
    // axios.interceptors.response.use((response)=>{
    //   console.log(response);
    //   response.data = JSON.stringify(response.data)
    //   return response;
      
    // })
    fetchData();
  }, [])
  return (
    <>
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
              <button onClick={() => deleteUser(data.id)}>delete</button>

            </div>
          )
        })}
      </div>
    </>
  )
}

export default App
