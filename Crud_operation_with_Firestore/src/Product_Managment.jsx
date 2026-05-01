import { addDoc, collection, deleteDoc, doc, onSnapshot, serverTimestamp, updateDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../firebase'
import './style.css'

function Product_Managment() {
    const [product, setproduct] = useState([])
    const [edit, setedit] = useState(null)

    const [form, setform] = useState({
        name: '',
        image: '',
        price: '',
        description: ''
    })

    const handlechange = (e) => {
        setform({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handlesubmit = async (e) => {
        e.preventDefault()

        try {
            if (edit) {
                const updatedata = doc(db, 'product', edit)

                await updateDoc(updatedata, {
                    ...form,
                    price: Number(form.price)
                })

                alert('Product Updated Successfully')
                setedit(null)
            } else {
                await addDoc(collection(db, 'product'), {
                    ...form,
                    price: Number(form.price),
                    createdAt: serverTimestamp()
                })

                alert('Product Added Successfully')
            }

            setform({
                name: '',
                image: '',
                price: '',
                description: ''
            })

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'product'), (snapshot) => {
            const data = snapshot.docs.map((p) => ({
                id: p.id,
                ...p.data()
            }))
            setproduct(data)
        })

        return () => unsubscribe()
    }, [])

    const handledit = (p) => {
        setedit(p.id)
        setform({
            name: p.name,
            image: p.image,
            price: p.price,
            description: p.description
        })
    }

    const handledelete = async (edit) => {
        try {
            await deleteDoc(doc(db, 'product', edit))
            alert('Product Deleted Successfully')
        }
        catch (error) {
            console.log('Failed to delete Product', error);

        }
    }

    return (
        <div className="container">

            {/* FORM */}
            <div className="form-box">
                <h2>{edit ? "Update Product" : "Add Product"}</h2>

                <form onSubmit={handlesubmit}>
                    <input type="text" name="name" placeholder="Name" value={form.name} onChange={handlechange} />
                    <input type="text" name="image" placeholder="Image URL" value={form.image} onChange={handlechange} />

                    {form.image && <img src={form.image} alt="" className="preview" />}

                    <input type="number" name="price" placeholder="Price" value={form.price} onChange={handlechange} />
                    <textarea name="description" placeholder="Description" value={form.description} onChange={handlechange}></textarea>

                    <button type="submit">{edit ? "Update" : "Add"}</button>
                </form>
            </div>

            {/* PRODUCTS */}
            <div className="table-container">
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Description</th>
                <th>Action</th>
            </tr>
        </thead>

        <tbody>
            {product.map((d) => (
                <tr key={d.id}>
                    <td>{d.id.slice(0,6)}...</td>

                    <td>
                        <img src={d.image} alt="" className="table-img" />
                    </td>

                    <td>{d.name}</td>
                    <td className="price">₹ {d.price}</td>
                    <td>{d.description}</td>

                    <td>
                        <button className="edit" onClick={() => handledit(d)}>Edit</button>
                        <button className="delete" onClick={() => handledelete(d.id)}>Delete</button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
</div>
        </div>
    )
}

export default Product_Managment