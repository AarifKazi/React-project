import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './admin.css'

function Admin() {

  const [data, setdata] = useState([])
  const [form, setform] = useState({
    image: "",
    name: "",
    price: ''
  })
  const [edit, setedit] = useState(null)

  const handlesubmit = async (e) => {
    e.preventDefault()
    const newdata = {
      product_id: data.length + 1,
      name: form.name,
      image: form.image,
      price: form.price
    }
    if (edit) {
      await axios.put(`http://localhost:3000/watches/${edit}`, newdata)
      alert("data upadated")
      console.log(edit);
    }
    else {
      await axios.post('http://localhost:3000/watches', newdata)
      alert('Product Added Successfully')
    }
    setform({ name: '', image: '', price: '' })
    setedit(null)
    getdata()
  }

  const handlechange = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const getdata = async () => {
    const res = await axios.get('http://localhost:3000/watches')
    setdata(res.data)
  }

  const handleedit = (product) => {
    setedit(product.id)
    setform({
      image: product.image,
      name: product.name,
      price: product.price
    })
  }

  const handledelete=async(id)=>{
    await axios.delete(`http://localhost:3000/watches/${id}`)
    alert('data deleted')
    window.location.reload();
  }

  useEffect(() => {
    getdata()
  }, [])

  return (
    <div className="admin-container">

      <div className="form-card">
        <h2>Add Watch</h2>

        <form onSubmit={handlesubmit}>
          <input
            type="text"
            placeholder='Enter Image URL'
            onChange={handlechange}
            name='image'
            value={form.image}
          />

          <input
            type="text"
            placeholder='Enter Name'
            onChange={handlechange}
            name='name'
            value={form.name}
          />

          <input
            type="text"
            placeholder='Enter Price'
            onChange={handlechange}
            name='price'
            value={form.price}
          />

          <button>Add Product</button>
        </form>
      </div>

      <table className="product-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {data.map((w) => (
            <tr key={w.id}>
              <td>{w.product_id}</td>
              <td>
                <img src={w.image} alt="" />
              </td>
              <td>{w.name}</td>
              <td className="price">₹{w.price}</td>
              <td>
                <button className="edit-btn" onClick={() => handleedit(w)}>Edit</button>
                <button className="delete-btn" onClick={()=> handledelete(w.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default Admin


