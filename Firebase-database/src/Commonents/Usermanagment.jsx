import React, { useEffect, useState } from "react";
import {
  collection,
  serverTimestamp,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  doc,
} from "firebase/firestore";
import { db } from "../firebase";
import "./style.css";

const ProductManagement = () => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    image: "",
  });

  const [products, setProducts] = useState([]);
  const [editId, setEditId] = useState(null);

  // Handle Input Change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Add / Update Product
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editId) {
        // Update Product
        await updateDoc(doc(db, "products", editId), {
          ...form,
        });

        alert("Product Updated Successfully!");
      } else {
        // Add Product
        await addDoc(collection(db, "products"), {
          ...form,
          createdAt: serverTimestamp(),
        });

        alert("Product Added Successfully!");
      }

      // Reset Form
      setForm({
        name: "",
        description: "",
        image: "",
      });

      setEditId(null);
    } catch (error) {
      console.error("Firebase Error:", error);
      alert(error.message);
    }
  };

  // Get Products
  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "products"),
      (snapshot) => {
        const productData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProducts(productData);
      },
      (error) => {
        console.error("Fetch Error:", error);
      }
    );

    return () => unsubscribe();
  }, []);

  // Delete Product
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) return;

    try {
      await deleteDoc(doc(db, "products", id));

      alert("Product Deleted Successfully!");
    } catch (error) {
      console.error("Delete Error:", error);
      alert(error.message);
    }
  };

  // Edit Product
  const handleEdit = (product) => {
    setForm({
      name: product.name || "",
      description: product.description || "",
      image: product.image || "",
    });

    setEditId(product.id);
  };

  return (
    <div className="product-container">
      {/* Form */}
      <div className="form-card">
        <h2>
          {editId ? "Update Product" : "Add New Product"}
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter Product Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="description"
            placeholder="Enter Product Description"
            value={form.description}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="image"
            placeholder="Enter Product Image URL"
            value={form.image}
            onChange={handleChange}
            required
          />

          <button type="submit">
            {editId ? "Update Product" : "Add Product"}
          </button>
        </form>
      </div>

      {/* Product Table */}
      <div className="table-card">
        <h2>Product List</h2>

        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.length > 0 ? (
              products.map((product) => (
                <tr key={product.id}>
                  <td>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-image"
                    />
                  </td>

                  <td>{product.name}</td>

                  <td>{product.description}</td>

                  <td>
                    <button
                      type="button"
                      className="edit-btn"
                      onClick={() => handleEdit(product)}
                    >
                      Edit
                    </button>

                    <button
                      type="button"
                      className="delete-btn"
                      onClick={() => handleDelete(product.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">No Products Found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductManagement;