import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [passward, setPassward] = useState('');
  const [length, setLength] = useState(8 );
  const [isNumberAllowed, setIsNumberAllowed] = useState(false);
  const [isCharacterAllowed, setIscharacterAllowerd] = useState(false);
  const [savedPassward, setSavedPassward] = useState([])
  
const passwordRef = useRef(null)

  const generatePassword = ()=>{
    let pass = ''
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if(isNumberAllowed) str += '1234567890'
    if(isCharacterAllowed) str+= '!@#$%^&*()_+-='

    for(let i = 0; i<length; i++){
        let randomIndex = Math.floor(Math.random()*str.length)
        let characterPicked = str.charAt(randomIndex)
        pass += characterPicked
        
    }
    
    setPassward(pass)
  }
  useEffect(()=>{
    generatePassword()
  }, [length,isCharacterAllowed,isNumberAllowed])



  const copyPassword = ()=>{
    navigator.clipboard.writeText(passward)
    passwordRef.current.select()
  }
  

  return (
    <>
      <div className=' select-none flex flex-col gap-5 max-w-120  m-auto'>
        <h1 className='text-center font-bold mt-5 text-4xl'>PASSWORD GENERATOR</h1>



        <input
          placeholder='Passward'
          value={passward}
          ref={passwordRef}
          type="text"
          readOnly={true}
          className='outline-none border-none bg-gray-200 px-3 py-1 rounded-lg text-black'
        />



        <input 
        min={0}
        max={100}
        value ={length}
        onChange={(e)=>setLength(e.target.value)}
        type="range"
        />



        <label htmlFor="numberAllowed">
          <input 
          id='numberAllowed'
           type="checkbox"
           checked={isNumberAllowed}
           onChange={(e)=>setIsNumberAllowed(e.target.checked)}
           />
          Number Allowed
        </label>


         <label htmlFor="characterAllowed">
          <input 
          id='characterAllowed'
           type="checkbox"
           checked={isCharacterAllowed}
           onChange={(e)=>setIscharacterAllowerd(e.target.checked)}
           />
          Character Allowed
        </label>
        <button className='bg-blue-500 px-3 py-2 rounded-lg'
        onClick={copyPassword }
        >Copy Password</button>
        <button className='bg-blue-500 px-3 py-2 rounded-lg'
        onClick={()=>{
          setSavedPassward([...savedPassward,passward])
        }}
        >Save Password</button>


        <button className='bg-gray-500 px-3 py-2 rounded-lg' 
        onClick={()=>{
          setLength(8)
          setIsNumberAllowed(false)
          setIscharacterAllowerd(false)
        }}
        >Reset Password</button>

        {savedPassward.map((item,index)=>{
          return(
            <p key={index}>
              {item}
            </p>
          )
        })}
      </div>
    </>
  )
}

export default App
