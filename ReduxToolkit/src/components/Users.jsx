import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchUser } from '../store/features/users/userSlice'

const Users = () => {
    const dispatch = useDispatch()
    const {users, error} = useSelector(state => state.user)
    console.log(users)
    useEffect(()=>{
       dispatch(fetchUser())
    },[])
  return (
    <div>
      
    </div>
  )
}

export default Users
