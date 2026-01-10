import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Button from './COMPONENTS/Button'
import './App.css'
import ColorBox from './COMPONENTS/ColorBox'

function App() {
  const [count, setCount] = useState(0)

  const color = ['pink', 'blue', 'red','brown']

  const [selectedColor , setselectedColor] = useState('transparent')

  return (
    <>
      <h1 className='text-white'>COLOR SWITCHER</h1>

      <div className='btns my-2'>
      {
        color.map( (item) =>{
          return( <Button  key={item} color={item} setselectedColor={setselectedColor}>
             {item}
           </Button >)
        })
      
      }
      </div>
      <ColorBox color={selectedColor}/>
    
    </>
  )
}

export default App
