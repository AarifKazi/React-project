import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
    fetchProducts,
    removeProduct,
    editProduct
} from './Redux/Thunk'

import './productitem.css'

function Productitem() {

    const dispatch = useDispatch()

    const products = useSelector(
        state => state.products.products
    )



    useEffect(()=>{

        dispatch(fetchProducts())

    },[])




    const handleDelete=(id)=>{

        dispatch(removeProduct(id))

        alert("Product Deleted")
    }




    const handleEdit=(item)=>{

        const updatedProduct = {

            ...item,

            title:"Updated Book"
        }

        dispatch(editProduct(updatedProduct))

        alert("Product Updated")
    }




  return (

    <div className='table-container'>

        <h1>
            📚 Book Table
        </h1>



        <table>

            <thead>

                <tr>

                    <th>ID</th>

                    <th>Image</th>

                    <th>Title</th>

                    <th>Price</th>

                    <th>Category</th>

                    <th>Edit</th>

                    <th>Delete</th>

                </tr>

            </thead>



            <tbody>

                {
                    products.map((item)=>(

                        <tr key={item.id}>

                            <td>{item.id}</td>

                            <td>
                                <img
                                src={item.image}
                                alt=""
                                />
                            </td>

                            <td>{item.title}</td>

                            <td>₹ {item.price}</td>

                            <td>{item.category}</td>



                            <td>

                                <button
                                className='edit-btn'
                                onClick={()=>handleEdit(item)}
                                >
                                    Edit
                                </button>

                            </td>



                            <td>

                                <button
                                className='delete-btn'
                                onClick={()=>handleDelete(item.id)}
                                >
                                    Delete
                                </button>

                            </td>

                        </tr>

                    ))
                }

            </tbody>

        </table>

    </div>

  )
}

export default Productitem