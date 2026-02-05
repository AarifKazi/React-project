import './App.css'

import Navbar from './components/Navbar.jsx'
import Card from './components/card.jsx'
import Products from './components/Product.js'
import Footer from './components/Footer.jsx'
import Product from './Pages/Product.jsx'
import Home from './Pages/Home.jsx'
import { Route, Routes } from 'react-router-dom'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/products' element={<Product/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
    </Routes>
    <Footer/> 
     </>  
    )
}

export default App
