import React, { useEffect } from 'react'
import useMystore from '../store'

const Navbar = () => {
    // const {count , name, increment , capatalizeName} = useMystore();
    const count = useMystore(state=>state.count)
    const increment = useMystore(state=>state.increment)
    const capatalizeName = useMystore(state => state.capatalizeName)

  useEffect(()=>{
    console.log('rerender hua' , count)
  },[count])

  return (
    <div>
      {/* <p>{name}</p> */}
      <p>{count}</p>
    <button onClick={increment}>Count</button>
    <button onClick={capatalizeName}>capitalize</button>

    </div>
  )
}

export default Navbar
