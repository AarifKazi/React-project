import React, { useState, useEffect } from "react";
import "./Home.css";

const Home=() => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  // Load data from localStorage
 useEffect(() => {
  const storedItems = JSON.parse(localStorage.getItem("crudData")) || [];
  setItems(storedItems);
}, []);

  // Save data to localStorage
  useEffect(() => {
    localStorage.setItem("crudData", JSON.stringify(items));
  }, [items]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    if (editIndex !== null) {
      // Update
      const updatedItems = [...items];
      updatedItems[editIndex] = input;
      setItems(updatedItems);
      setEditIndex(null);
    } else {
      // Create
      setItems([...items, input]);
    }

    setInput("");
  };

  const handleEdit = (index) => {
    setInput(items[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const filtered = items.filter((_, i) => i !== index);
    setItems(filtered);
  };

  return (
    <div className="container">
      <h2>CRUD OPERATION</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter something..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </form>

      <div className="list">
        {items.length === 0 ? (
          <p>No data found</p>
        ) : (
          items.map((item, index) => (
            <div className="card" key={index}>
              <span>{item}</span>
              <div className="btns">
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;