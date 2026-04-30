import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './Detail.css'
import { useDispatch } from 'react-redux';
import { addtocart } from '../Cartslice';

function Detail() {
  const [updatedata, setupdatedata] = useState(null)
  
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const { id } = useParams();

  const getdata = async () => {
    const res = await axios.get(`http://localhost:3000/watches/${id}`)
    setupdatedata(res.data)
  }

  useEffect(() => {
    getdata()
  }, [id])

  if (!updatedata) return <h2 className="loading">Loading...</h2>

  return (
    <div className="detail-container">
      <div className="detail-card">

        <div className="image-section">
          <img src={updatedata.image} alt="" />
        </div>

        <div className="info-section">
          <h1>{updatedata.name}</h1>
          <p className="price">₹{updatedata.price}</p>

          <p className="desc">
            Premium quality Aurex watch with stylish design and durability.
          </p>

          <div className="buttons">
            <button className='cart-btn' onClick={()=>{dispatch(addtocart(updatedata)),navigate('./addtocart')}}>Add to cart</button>
            <button className="buy-btn">Buy Now</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Detail