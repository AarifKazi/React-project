import { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState(null)
    const [error,setError] = useState("")

    const navigate = useNavigate()

    const register=(e)=>{
        e.preventDefault(); 
        if(name === "" || email === "" || password === ""){
            setError("Plz Enter value")
        }
        else if(!email.includes("@")){
            setError("Plz Enter correct email")
        }
        else if(password.length < 8){
            setError("Pawword length is 8 or greter than 8")
            
        }
        else{
            alert('form submited')
            localStorage.setItem('user',name)
            setName("")
            setEmail("")
            setPassword("")
        }
    }
  return (
    <div className="register-wrapper">
      <div className="register-box">

        <h2>Register</h2>
        <p>Create your KitabGhar account</p>

        <form className="register-form" onSubmit={register}>

          <div className="form-group">
            <label>Full Name</label>
            <input type="text" value={name} placeholder="Enter your name" onChange={(e)=> setName(e.target.value)}/>
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="text" value={email} placeholder="Enter your email" onChange={(e)=> setEmail(e.target.value)}/>
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" value={password} placeholder="Enter password" onChange={(e)=> setPassword(e.target.value)}/>
          </div>
           <p style={{color:'red',margin:"0",fontSize:"20px", fontWeight:'bold'}}>{error}</p>
          <button type="submit" className="submit-btn">
            Create Account
          </button>

        </form>

      </div>
    </div>
  );
};

export default Register;
