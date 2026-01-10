import React, { useRef } from 'react'

const FormValidation = () => {

  const nameRef= useRef(null);
  const emailRef= useRef(null);
  const passwardRef= useRef(null);

  const handleSubmit = (event)=>{
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const passward = passwardRef.current.value;
    console.log(name,email,passward);
    
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <h1>welcome</h1>
      <input type="text"ref={nameRef} placeholder='enter your username'/>
      <br /><br />
      <input type="email" ref={emailRef} placeholder='enter your email'/>
      <br /><br />
      <input type="passward" ref={passwardRef} placeholder='enter your passward'/>
      <br /><br />
      <button>submit</button>
      </form>
    </div>
  )
}

export default FormValidation
