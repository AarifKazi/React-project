// Crud_with_json.jsx
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './style.css'

function Crud_with_json() {
    const [user, setuser] = useState([])

    const [form, setform] = useState({
        id: "",
        name: "",
        city: "",
        gender: ""
    })

    const [edit, setedit] = useState(null)

    const api = "http://localhost:3000/users"

    const data = async () => {
        const res = await axios.get(api)
        setuser(res.data)
    }

    const handlechange = (e) => {
        setform({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        data()
    }, [])
    
    const handledit=(u)=>{
        setform({
            name:u.name,
            city:u.city,
            gender:u.gender
        })
        setedit(u.id)
    }

    const handlesubmit=async(e)=>{
       e.preventDefault()

       if(edit){
            await axios.put(`${api}/${edit}`,form)
       } else {
            await axios.post(`${api}`,form)
       }

       data();

       setform({
        name:"",
        city:"",
        gender:""
       })

       setedit(null)
    }

    const handledelete=async(id)=>{
        await axios.delete(`${api}/${id}`)
        data();
    }

    return (
        <div className="container">
            <h1 className="title">User Management</h1>

            <div className="card">
                <form onSubmit={handlesubmit} className="form">
                    <input type="text" placeholder='Enter Name' value={form.name} onChange={handlechange} name='name' />
                    <input type="text" placeholder='Enter City' value={form.city} onChange={handlechange} name='city' />
                    <input type="text" placeholder='Enter Gender' value={form.gender} onChange={handlechange} name='gender' />
                    <button className="btn-primary">
                        {edit ? "Update User" : "Add User"}
                    </button>
                </form>
            </div>

            <div className="table-card">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>City</th>
                            <th>Gender</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map((u) => (
                                <tr key={u.id}>
                                    <td>{u.id}</td>
                                    <td>{u.name}</td>
                                    <td>{u.city}</td>
                                    <td>{u.gender}</td>
                                    <td>
                                        <button className="btn-edit" onClick={()=>handledit(u)}>Edit</button>
                                        <button className="btn-delete" onClick={()=>handledelete(u.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Crud_with_json



