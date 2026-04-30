import React, { useState } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate()

  const user = JSON.parse(localStorage.getItem('user-data'))

  const removedata=()=>{
    localStorage.removeItem('user-data')
    window.location.reload()
  } 

  return (
    <header className="header">
      <div className="logo">AUREX<span>Watches</span></div>

      <nav className="nav">
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/product'>Product</Link>
        <Link to='/contact'>Contact</Link>
      </nav>

    <div>
      {
        user ?
      <button className="login-btn" onClick={removedata}>Logout</button>
      :
      <button className="login-btn" onClick={()=>navigate('/register')}>Login</button>
      }
    </div>
    </header>
  );
}

export default Header;