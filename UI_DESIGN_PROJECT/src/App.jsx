import Page1 from './components/page1/Page1'

function App() {
   
  const users = [
    {
      img:'https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1974',
      intro:'',
      tag:'Satisfied'
    },
    {
      img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1976',
      intro:'',
      tag:'Under Served'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661641353075-f0eaf2d82aae?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1935',
      intro:'',
      tag:'Satisfied'
    }
  ]
  return (
    <>
     <Page1 users={users}/> 
     
    </>
  )
}

export default App
