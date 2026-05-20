import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Productlist from './Components/Productlist'
import Productform from './Components/Productform'
import Productitem from './Components/Productitem'
import Login from './Components/Login'
import PrivateRoute from './Components/Privateroute'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/login' element={<Login />} />
        
        <Route path='/productlist' element={
          <PrivateRoute>
            <Productlist />
          </PrivateRoute>
        } />
        
        <Route path='/' element={
          <PrivateRoute>
            <Productform />
          </PrivateRoute>
        } />
        
        <Route path='/productitem' element={
          <PrivateRoute>
            <Productitem />
          </PrivateRoute>
        } />
      </Routes>
    </div>
  )
}

export default App
