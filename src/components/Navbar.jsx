import './navbar.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar = ()=>{
    const [isAuth,setisAuth]=useState(false)
    
    return(
        <>
        <div className="navbar">
            <h1>J.K PVC</h1>
            <ul>
               <Link to='/' className='nav-link'>Home</Link>
               <Link to='/products' className='nav-link'>Product</Link>
               <Link to='/about' className='nav-link'>About</Link>
               <Link to='/Contact' className='nav-link'>Contact</Link>
            </ul>
            {
                isAuth ? (
                    <button onClick={()=>setisAuth(false)}>Logout</button>
                ):
                (<button onClick={()=>setisAuth(true)}>Login</button>)
            }

        </div>
        </>

    )
}

export default Navbar;