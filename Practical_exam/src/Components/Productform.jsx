import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
    createProduct,
    fetchProducts,
    removeProduct,
    editProduct
} from './Redux/Thunk'

import './productform.css'

function ProductForm() {

    const dispatch = useDispatch()

    const products = useSelector(
        state => state.products.products
    )

    const [title,settitle] = useState("")
    const [price,setprice] = useState("")
    const [image,setimage] = useState("")
    const [category,setcategory] = useState("")

    const [editid,seteditid] = useState(null)



    useEffect(()=>{

        dispatch(fetchProducts())

    },[])



    const handlesubmit=(e)=>{

        e.preventDefault()

        if(!title || !price || !image || !category){
            alert("All fields required")
            return
        }



        // UPDATE

        if(editid){

            const updatedProduct = {

                id:editid,
                title,
                price,
                image,
                category
            }

            dispatch(editProduct(updatedProduct))

            alert("Product Updated")

            seteditid(null)
        }



        // ADD

        else{

            const product = {
                title,
                price,
                image,
                category
            }

            dispatch(createProduct(product))

            alert("Product Added")
        }



        // CLEAR FORM

        settitle("")
        setprice("")
        setimage("")
        setcategory("")
    }



    // DELETE

    const handleDelete=(id)=>{

        dispatch(removeProduct(id))

        alert("Product Deleted")
    }



    // EDIT

    const handleEdit=(item)=>{

        seteditid(item.id)

        settitle(item.title)

        setprice(item.price)

        setimage(item.image)

        setcategory(item.category)
    }



  return (

    <div className='main-container'>

        {/* FORM */}

        <div className='form-container'>

            <form
            className='product-form'
            onSubmit={handlesubmit}
            >

                <h2>
                    {
                        editid
                        ?
                        "Update Book"
                        :
                        "Add New Book"
                    }
                </h2>



                <input
                type="text"
                placeholder='Enter Title'
                value={title}
                onChange={(e)=>settitle(e.target.value)}
                />



                <input
                type="number"
                placeholder='Enter Price'
                value={price}
                onChange={(e)=>setprice(e.target.value)}
                />



                <input
                type="text"
                placeholder='Enter Image URL'
                value={image}
                onChange={(e)=>setimage(e.target.value)}
                />



                <input
                type="text"
                placeholder='Enter Category'
                value={category}
                onChange={(e)=>setcategory(e.target.value)}
                />



                <button>

                    {
                        editid
                        ?
                        "Update Product"
                        :
                        "Add Product"
                    }

                </button>

            </form>

        </div>



        {/* TABLE */}

        <div className='table-container'>

            <h2 className='table-heading'>
                📚 Product Data
            </h2>

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
                                    className='table-image'
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

    </div>

  )
}

export default ProductForm