import React from 'react'
import Carddata from './Components/Carddata'
import products from './Components/Product'
import { Review } from './Components/Review'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      
      <Routes>
        <Route path='/' element={
          <Carddata data={products} />
        } />
        <Route path='/form' element={<Review />} />
      </Routes>

    </div>
  )
}

export default App
