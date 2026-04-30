import React from 'react'
import Header from './Components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Product from './Pages/Product'
import Contact from './Pages/Contact'
import Admin from './Pages/Admin'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Detail from './Pages/Detail'
import Addtocart from './Pages/Addtocart'

function App() {
  return (
    <div>
      <Header/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/Product' element={<Product/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/Product' element={<Product/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='admin' element={<Admin/>}/>
        <Route path='/product/:id' element={<Detail/>}/>
        <Route path='/product/:id/addtocart' element={<Addtocart/>}/>
      </Routes>
      
    </div>
  )
}

export default App
