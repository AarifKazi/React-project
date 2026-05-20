import React, { useState } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loginUser } from './Redux/Slice'
import './login.css'

function Login() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const user = JSON.parse(localStorage.getItem('user'))

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")



    if(user){
        return <Navigate to='/productlist'/>
    }



    const handleLogin=(e)=>{

        e.preventDefault()

        if(!username || !password){
            alert("All fields required")
            return
        }

        const userdata = {
            username,
            password
        }

        dispatch(loginUser(userdata))

        alert("Login Successful")

        navigate('/productlist')
    }



  return (

    <div className="login-container">

        <form
        className="login-form"
        onSubmit={handleLogin}
        >

            <h2>BookVerse Login</h2>

            <input
            type="text"
            placeholder='Enter Username'
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            />



            <input
            type="password"
            placeholder='Enter Password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />

            <button>
                Login
            </button>

        </form>

    </div>

  )
}

export default Login