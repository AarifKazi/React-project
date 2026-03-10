import React from 'react'
import { useNavigate } from "react-router-dom";
import "./review.css";

const Carddata = ({ data }) => {
    const navigate = useNavigate()
    return (
        <>

            <div className="review-card-container">
                <h1 className="title" style={{marginBottom:"50px",fontSize:"30px"}}>Product Review</h1>

                <div className="product-grid">
                    {data.map((item) => (
                        <div className="card" key={item.id}>
                            <div className="img-box">
                                <img src={item.img} alt={item.name} />
                            </div>

                            <div className="card-body">
                                <h2>{item.name}</h2>
                                <p className="price">₹{item.price}</p>
                                <button className="btn" onClick={()=>navigate("/form")}>View Review</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Carddata
