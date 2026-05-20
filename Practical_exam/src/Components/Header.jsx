import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './header.css'

function Header() {

  const navigate = useNavigate()

  const user = JSON.parse(localStorage.getItem('user'))




  const handleLogout = ()=>{

    localStorage.removeItem('user')

    alert("Logout Successful")

    navigate('/')
  }




  return (

    <header className='header'>

      <div className='logo'>
        <h2>📚 BookVerse</h2>
      </div>



      {
        user &&

        <ul className='nav-links'>

          <li>
            <NavLink to='/productlist'>
              Product List
            </NavLink>
          </li>


          <li>
            <NavLink to='/'>
              Add Product
            </NavLink>
          </li>

          <li>
            <NavLink to='/productitem'>
              Productitem
            </NavLink>
          </li>


          <li>
            <button
            className='logout-btn'
            onClick={handleLogout}
            >
              Logout
            </button>
          </li>

        </ul>
      }

    </header>

  )
}

export default Header