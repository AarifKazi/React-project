import React from 'react'
import Footer from '../Components/Footer'

function Book() {
  return (
    <div>
      
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

      <Footer/>
    </div>
  )
}

export default Book
