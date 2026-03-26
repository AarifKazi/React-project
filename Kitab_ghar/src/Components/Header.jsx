import {useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const user = localStorage.getItem('user')
  const navigate = useNavigate()

  const logout=()=>{
    window.location.reload()
    localStorage.removeItem('user')
    alert('you are Log Out')
  }
  return (
    <nav className="navbar">
      <div className="logo">
        📚 Kitab<span>Ghar</span>
      </div>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
      <Link to="/">Home</Link>
      <Link to="/book">Book</Link>
      <Link to="/aboutus">About us</Link>
      <Link to="/contactus">Contact us</Link>
      </div>

      <div className="nav-right">
        {
          user ? 
          <>
          <button className="cart-btn" style={{marginRight:"10px"}}>{user}</button>
          <button className="cart-btn" onClick={logout}>Log out</button></>
          :
          <button className="cart-btn" onClick={()=>navigate('/register')}>Login</button>
        }
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
        </div>
      </div>
    </nav>
  );
};

export default Navbar;








