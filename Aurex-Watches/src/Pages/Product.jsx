import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Product.css'
import Footer from "../Components/Footer";
import { useNavigate, useParams } from 'react-router-dom'

function Product() {
  const [product, setproduct] = useState([])

  const navigate = useNavigate()

  const getdata = async () => {
    try{
    const res = await axios.get('http://localhost:3000/watches')
    setproduct(res.data)
    }
    catch(error){
      console.log('failed connection',error);
    }
  }
  useEffect(() => {
    getdata()
  }, [])
  return (
    <div className='main-container'>
    <h1 style={{textAlign:'center',padding:'40px 0',color:'#FFD700'}}>Watches Collection</h1>
    <div className='product-container'>
      {
        product.map((w)=>(
          <div className="watch-data">
            <img src={w.image} alt="" />
            <h2>{w.name}</h2>
            <p>{w.price}</p>
              <button className='add-cart-btn' onClick={()=> navigate(`/product/${w.id}`)}>View More</button>
          </div>
        ))
      }
    </div>
    <Footer/>
    </div>
  )
}

export default Product
