import axios from "axios";

import {
    setProducts,
    addProduct,
    deleteProduct,
    updateProduct
} from './Slice'

const API = "http://localhost:3000/products"




export const fetchProducts = () => async(dispatch)=>{

    const res = await axios.get(API)

    dispatch(setProducts(res.data))
}




export const createProduct = (product) => async(dispatch)=>{

    const res = await axios.post(API, product)

    dispatch(addProduct(res.data))
}




export const removeProduct = (id) => async(dispatch)=>{

    await axios.delete(`${API}/${id}`)

    dispatch(deleteProduct(id))
}




export const editProduct = (product) => async(dispatch)=>{

    const res = await axios.put(
        `${API}/${product.id}`,
        product
    )

    dispatch(updateProduct(res.data))
}