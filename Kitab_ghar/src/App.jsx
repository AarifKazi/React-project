import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Home from './Pages/Home'
import Book from './Pages/Book'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Register from './Pages/Register'

function App() {
  return(
    <>
     <Header/>

     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/book' element={<Book/>}></Route>
      <Route path='/aboutus' element={<About/>}></Route>
      <Route path='/contactus' element={<Contact/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
     </Routes>
    </>
  )
  
}

export default App
