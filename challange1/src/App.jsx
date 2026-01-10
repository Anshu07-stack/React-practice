import './App.css'
import Card from './Card'
function App() {

  return (
    <>
    <div className='grid grid-cols-4 gap-[1rem] max-[1200px]:grid-cols-3
    max-[950px]:grid-cols-2 max-[600px]:grid-cols-1 p-[1rem]'>
      <Card name="ANSHU KUMAR" role="MERN STACK DEVELOPER"/>
      <Card/>
      <Card/>
      <Card/>
      <Card/> 
    </div>
    </>
  )
}

export default App
