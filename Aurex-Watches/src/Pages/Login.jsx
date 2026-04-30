import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

function Login() {
  const navigate = useNavigate()

  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  // const user = JSON.parse(localStorage.getItem('user-data'))



  const userdata = async () => {
    try {

      const res = await axios.get('http://localhost:3000/user')
      const users = res.data
       
      const checkuser = users.find((u)=> u.email === email && u.password === password)

      if(email == "" && password == ""){
        alert('all fields Required')
        return
      }

      if(checkuser){
        localStorage.setItem('user-data',JSON.stringify(users))
        navigate('/')
        alert('login successfully')
      }
      else{
        alert('invalid email and password')
      }
    }
    catch (error) {
      console.log('failed ', error);

    }

    

  }

  return (
    <div className="container">
      <div className="overlay"></div>

      <div className="card-login">
        <h1 className="logo">AUREX</h1>
        <p className="tagline">Luxury Watches</p>

        <h2>Sign In</h2>

        <input
          type="email"
          placeholder="Email Address" value={email}
          onChange={(e) => setemail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />

        <button onClick={userdata}>Login</button>

        <p className="bottom-text">
          Don’t have an account?
          <span onClick={() => navigate('/register')}> Register</span>
        </p>
      </div>
    </div>
  )
}

export default Login