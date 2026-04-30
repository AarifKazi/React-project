import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Addtocart.css'
import { decrement, increment,removeitem,clearitem } from '../Cartslice'

function Addtocart() {

  const data = useSelector(state => state.cart.cart)
  localStorage.setItem('item-data',JSON.stringify(data))
  const dispatch = useDispatch()

  return (
    <div className="cart-container">
      <h2 className="cart-title">🛒 Your Cart</h2>

      {
        data.length === 0 ? (
          <h3 className="empty">No Cart Item</h3>
        ) : (
          <table className="cart-table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Action</th>
                <th>Remove</th>
                <th>Clear Card</th>
              </tr>
            </thead>

            <tbody>
              {
                data.map((a,i) => (
                  <tr key={a.id}>
                    <td>{i+1}</td>

                    <td>
                      <img src={a.image} alt="" className="cart-img" />
                    </td>

                    <td>{a.name}</td>
                    <td>₹{a.price}</td>
                    <td>{a.qty}</td>

                    <td>
                      <button className="btn add" onClick={()=>dispatch(increment(a.id))}>+</button>
                      <button className="btn remove" onClick={()=>dispatch(decrement(a.id))}>-</button>
                    </td>
                    <td><button onClick={()=>dispatch(removeitem(a.id))}>Remove</button></td>
                    <td><button onClick={()=>dispatch(clearitem())}>Clear</button></td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        )
      }
    </div>
  )
}

export default Addtocart