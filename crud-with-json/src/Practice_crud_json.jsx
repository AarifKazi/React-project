import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Practice_crud_json() {
    const [data,setData] = useState([])

    const [form,setform] = useState({
      image:"",
      name:"",
      price:"",
    })

    const api="http://localhost:3000/furniture"

    const apidata=async()=>{
      const res=await axios.get(api)
      setData(res.data)
    }

    useEffect(()=>{
      apidata();
    },[])

    const handlechange=(e)=>{
      setform({
        ...form,
        [e.target.name]:e.target.value
      })
    }

    const hanldeedit=(u)=>{
        setform({
          name:u.name
        })
    }

    
  return (
    <div>
      <h1>Furniture Product Managment</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Product_Name</th>
            <th>Product_Price</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item)=>(
              <tr>
                <td>{item.id}</td>
                <img src={item.image} alt="" style={{height:"50px"}}/>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td><button>Edit</button></td>
                <td><button>Delete</button></td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <br />

      <form>
        <input type="text" placeholder='Enter image' value={form.image} onChange={handlechange} name='image'/>
        <input type="text" placeholder='Enter Name' value={form.name} onChange={handlechange} name='name'/>
        <input type="text" placeholder='Enter Price'  value={form.price} onChange={handlechange} name='price'/>
        <button>add more</button>
      </form>
    </div>
  )
}

export default Practice_crud_json
