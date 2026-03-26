import React from "react";
import "./Home.css";
import { FaBook, FaBrain, FaBriefcase, FaChild, FaUniversity } from "react-icons/fa";
import Footer from "../Components/Footer";

function Home() {
  return (
    <>
      <div className="home-container">

        <div className="hero-section">

          {/* Left Image */}
          <div className="hero-left">
            <img
              src="https://cdn-icons-png.flaticon.com/512/29/29302.png"
              alt="Books"
            />
          </div>

          {/* Right Content */}
          <div className="hero-right">
            <p className="welcome-text">WELCOME TO</p>

            <h1>
              <span className="underline">KitabGhar:</span> <br />
              Where Stories Meet <br /> Their Readers
            </h1>

            <p className="sub-text">
              Your Next Chapter Begins Here
            </p>

            <button className="discover-btn">
              Discover Now →
            </button>
          </div>

        </div>

      </div>

      {/* categories */}
      <section className="categories">
        <h2>Browse Categories</h2>

        <div className="category-container">

          <div className="category-card">
            <FaBook className="icon" />
            <h3>Fiction</h3>
          </div>

          <div className="category-card">
            <FaBrain className="icon" />
            <h3>Self Help</h3>
          </div>

          <div className="category-card">
            <FaBriefcase className="icon" />
            <h3>Business</h3>
          </div>

          <div className="category-card">
            <FaUniversity className="icon" />
            <h3>Academic</h3>
          </div>

          <div className="category-card">
            <FaChild className="icon" />
            <h3>Children</h3>
          </div>

        </div>
      </section>

      {/* FEATURED BOOKS SECTION */}
      <section className="featured-books">
        <h2>Featured Books</h2>

        <div className="books-container">

          <div className="book-card">
            <img src="https://images.unsplash.com/photo-1544947950-fa07a98d237f" alt="book" />
            <h3>Atomic Habits</h3>
            <p className="price">₹399</p>
            <button>Add to Cart</button>
          </div>

          <div className="book-card">
            <img src="https://images.unsplash.com/photo-1512820790803-83ca734da794" alt="book" />
            <h3>Rich Dad Poor Dad</h3>
            <p className="price">₹299</p>
            <button>Add to Cart</button>
          </div>

          <div className="book-card">
            <img src="https://images.unsplash.com/photo-1528207776546-365bb710ee93" alt="book" />
            <h3>The Alchemist</h3>
            <p className="price">₹349</p>
            <button>Add to Cart</button>
          </div>

          <div className="book-card">
            <img src="https://images.unsplash.com/photo-1516979187457-637abb4f9353" alt="book" />
            <h3>Think and Grow Rich</h3>
            <p className="price">₹279</p>
            <button>Add to Cart</button>
          </div>

          <div className="book-card">
            <img src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d" alt="book" />
            <h3>Ikigai</h3>
            <p className="price">₹320</p>
            <button>Add to Cart</button>
          </div>

          <div className="book-card">
            <img src="https://images.unsplash.com/photo-1507842217343-583bb7270b66" alt="book" />
            <h3>Do Epic Shit</h3>
            <p className="price">₹250</p>
            <button>Add to Cart</button>
          </div>

          <div className="book-card">
            <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba" alt="book" />
            <h3>Deep Work</h3>
            <p className="price">₹410</p>
            <button>Add to Cart</button>
          </div>

          <div className="book-card">
            <img src="https://images.unsplash.com/photo-1476275466078-4007374efbbe" alt="book" />
            <h3>Zero to One</h3>
            <p className="price">₹370</p>
            <button>Add to Cart</button>
          </div>

          <div className="book-card">
            <img src="https://images.unsplash.com/photo-1512820790803-83ca734da794" alt="book" />
            <h3>Psychology of Money</h3>
            <p className="price">₹390</p>
            <button>Add to Cart</button>
          </div>

          <div className="book-card">
            <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570" alt="book" />
            <h3>Wings of Fire</h3>
            <p className="price">₹280</p>
            <button>Add to Cart</button>
          </div>

        </div>
      </section>

      {/* why choose us */}
      <section class="why-choose">
        <div class="why-container">
          <h2 class="section-title">Why Choose KitabGhar?</h2>
          <p class="section-subtitle">
            We provide quality books with the best prices and fast delivery.
          </p>

          <div class="why-cards">

            <div class="why-card">
              <div class="icon">📚</div>
              <h3>Wide Collection</h3>
              <p>Thousands of books across all categories including fiction, academic and competitive exams.</p>
            </div>

            <div class="why-card">
              <div class="icon">💰</div>
              <h3>Best Prices</h3>
              <p>Affordable pricing with exciting discounts and special offers for students.</p>
            </div>

            <div class="why-card">
              <div class="icon">🚚</div>
              <h3>Fast Delivery</h3>
              <p>Quick and reliable delivery service across India with safe packaging.</p>
            </div>

            <div class="why-card">
              <div class="icon">⭐</div>
              <h3>Trusted by Readers</h3>
              <p>Thousands of happy customers trust KitabGhar for their book needs.</p>
            </div>

          </div>
        </div>
      </section>

      {/* offer banner */}
      <section class="offer-banner">
        <div class="offer-content">
          <h2>🎉 Special Offer - 30% OFF</h2>
          <p>Get flat 30% discount on all competitive & academic books. Limited Time Only!</p>
          <a href="#" class="offer-btn">Shop Now</a>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;