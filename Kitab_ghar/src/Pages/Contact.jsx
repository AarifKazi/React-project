import React, { useState } from 'react'
import './Contact.css'

function Contact() {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [msg,setmsg] = useState("")
  const [error,seterror] = useState("")

  const handlesubmit=(e)=>{
    e.preventDefault()
    if(name === "" || email === "" || msg === ""){
      seterror("plz filled detail")
    }
    else if(!email.includes("@")){
      seterror("pla enter valid email")
    }
    else{
      seterror("")  
      setName("")
      setEmail("")
      setmsg("")
      alert('form submited successfully')
    }
  }
  return (
    <div className='main-container'>
    <div className="form-container">
      <form action="" onSubmit={handlesubmit}>
      <h1>Contact</h1>
      <input type="text" value={name} placeholder='Enter your Name' onChange={(e)=>setName(e.target.value)}/>
      <br />
      <input type="text" value={email} placeholder='Enter your Email' onChange={(e)=>setEmail(e.target.value)}/>
      <br />
      <textarea name="msg" value={msg} id="" placeholder='Enter your Message' onChange={(e)=>setmsg(e.target.value)}></textarea>
      <br />
      <button type='submit'>Send Message</button>
      </form>
      {
        error && <h1 style={{color:"red"}}>{error}</h1>
      }
    </div>
    </div>
  )
}

export default Contact
