import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Testimonials from './Pages/Testimonials'
import About from './Pages/About'
import Service from './Pages/Service'
import IndustrySolutions from './Components/IndustrySolutions'
import Solution from './Pages/Solution'
import Team from './Pages/Team'
import Contact from './Pages/Contact'
import ServiceDetails from './Components/ServiceDetails'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/solution' element={<Solution />} />
        <Route path='/testimonials' element={<Testimonials />} />
        <Route path='/team' element={<Team />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/service/:id" element={<ServiceDetails/>}/>

      </Routes>
      <Footer />
    </div>
  )
}

export default App
