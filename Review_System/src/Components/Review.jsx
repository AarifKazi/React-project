import React, { useState } from "react";
import "./review.css";

export const Review = () => {
  const [review, setReview] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();

    const reviewdata = {
      id: review.length + 1,
      name,
      message,
      rating,
    };

    setReview([...review, reviewdata]);

    setName("");
    setMessage("");
    setRating("");
  };

  return (
    <div className="review-container">
       <div>
      <form className="review-form" onSubmit={handlesubmit}>
      <h1 className="title">Customer Reviews</h1>
        <input
          type="text"
          value={name}
          placeholder="Enter your Name"
          onChange={(e) => setName(e.target.value)}
        />

        <textarea
          value={message}
          placeholder="Enter your Message"
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <select value={rating} onChange={(e) => setRating(e.target.value)}>
          <option value="">Select Rating</option>
          <option value="1">⭐</option>
          <option value="2">⭐⭐</option>
          <option value="3">⭐⭐⭐</option>
          <option value="4">⭐⭐⭐⭐</option>
          <option value="5">⭐⭐⭐⭐⭐</option>
        </select>

        <button className="btn">Submit Review</button>
      </form>

      </div>

      {review.length === 0 ? (
        <h2 className="no-review">No Reviews Yet</h2>
      ) : (
        <div className="review-grid">
          {review.map((d) => (
            <div className="review-card" key={d.id}>
              <h3>{d.name}</h3>
              <p className="msg">{d.message}</p>
              <p className="rating">{d.rating} ⭐</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};