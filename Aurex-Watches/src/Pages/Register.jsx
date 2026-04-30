import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Register.css'

function Register() {

    const navigate = useNavigate()

    const [form, setform] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handlechange = (e) => {
        setform({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handlesubmit = async (e) => {
        e.preventDefault()

        try {
            if(form.email == "" || form.password == "" || form.name == ""){
                alert('all field fill up')
            }
            else{
            const newdata={
                name:form.name,
                email:form.email,
                password:form.password,
                role:'admin'
            }
            const res = await axios.get('http://localhost:3000/user')
            const data = res.data

            const validdata = data.find((d)=> d.email == form.email && d.password == form.password && d.name == form.name)

            if(validdata){
            alert('user already exist')
            navigate('/login')
            }
            else{
                const res = await axios.post('http://localhost:3000/user',newdata)
                localStorage.setItem('user-data',JSON.stringify(res.data))
                alert("Registration Successfully")

            }

        }
    }
        catch (error) {
            console.log('fetch connection failed', error);
        }

        setform({
            name: '',
            email: '',
            password: ''
        })
    }

    

    return (
        <div className="container">
            <div className="overlay"></div>

            <form className="card" onSubmit={handlesubmit}>
                <h1 className="logo">AUREX</h1>
                <p className="tagline">Luxury Watches</p>

                <h2>Create Account</h2>

                <input 
                    type="text" 
                    placeholder='Full Name' 
                    name='name' 
                    value={form.name} 
                    onChange={handlechange} 
                />

                <input 
                    type="email" 
                    placeholder='Email Address' 
                    name='email' 
                    value={form.email} 
                    onChange={handlechange} 
                />

                <input 
                    type="password" 
                    placeholder='Password' 
                    name='password' 
                    value={form.password} 
                    onChange={handlechange} 
                />

                <button type="submit">Register</button>

                <p className="bottom-text">
                    Already have an account?
                    <span onClick={() => navigate('/login')}> Login</span>
                </p>
            </form>
        </div>
    )
}

export default Register