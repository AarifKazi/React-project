import React, { useState } from 'react'
import './datatable.css'

function Datatable() {

  const [search, setsearch] = useState("")
  const [categories, setcategories] = useState("All")
  const [sort, setsort] = useState("")

  const [product] = useState([
    { id: 1, name: "Fossil Grant Chronograph", price: 8999, category: "Analog", image: "https://m.media-amazon.com/images/I/71EkzrwiU6L._SX679_.jpg" },
    { id: 2, name: "Casio Edifice Analog", price: 5499, category: "Analog", image: "https://m.media-amazon.com/images/I/61ybeKQto8L._AC_UL1500_.jpg" },
    { id: 3, name: "Titan Neo Analog", price: 3299, category: "Analog", image: "https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw5d1728c4/images/Titan/Catalog/1885NM01_2.jpg" },
    { id: 4, name: "Sonata Digital Sports", price: 1499, category: "Digital", image: "https://img.tatacliq.com/images/i16//437Wx649H/MP000000021473675_437Wx649H_202403071456041.jpeg" },
    { id: 5, name: "Noise ColorFit Smartwatch", price: 2499, category: "Smartwatch", image: "https://m.media-amazon.com/images/I/61epn29QG0L._AC_UL1500_.jpg" },
    { id: 6, name: "Fire-Boltt Ninja Smartwatch", price: 1999, category: "Smartwatch", image: "https://vsprod.vijaysales.com/media/catalog/product/2/4/246246.jpg" },
    { id: 7, name: "Rolex Style Submariner", price: 15999, category: "Analog", image: "https://5.imimg.com/data5/SELLER/Default/2025/5/513207718/NF/TP/JU/5468509/9-a-500x500.jpg" },
    { id: 8, name: "Apple Watch Series 8", price: 45999, category: "Smartwatch", image: "https://www.wodarmour.in/cdn/shop/files/Golfer-MORNING-US.jpg" },
    { id: 9, name: "Samsung Galaxy Watch 5", price: 27999, category: "Smartwatch", image: "https://images.samsung.com/is/image/samsung/p6pim/in/2407/gallery/in-galaxy-watch-ultra-l705-sm-l705fdaains-542169127" },
    { id: 10, name: "Boat Xtend Smartwatch", price: 2999, category: "Smartwatch", image: "https://m.media-amazon.com/images/I/61IMRs+o0iL._AC_UL1500_.jpg" }
  ])

  // 🔍 Filter + Category
  let filteredData = product.filter((item) => {
    const searchMatch = item.name.toLowerCase().includes(search.toLowerCase())
    const categoryMatch = categories === "All" ? true : item.category === categories
    return searchMatch && categoryMatch
  })

  // 🔽 Sorting
  if (sort === "low") {
    filteredData.sort((a, b) => a.price - b.price)
  } else if (sort === "high") {
    filteredData.sort((a, b) => b.price - a.price)
  }

  return (
    <div>

      {/* 🔥 Heading */}
      <h2 className="title">Watch Collection</h2>

      {/* 🔧 Controls */}
      <div className="controls">

        <input
          type="text"
          placeholder="Search watches..."
          value={search}
          onChange={(e) => setsearch(e.target.value)}
        />

        <select onChange={(e) => setcategories(e.target.value)}>
          <option value="All">All</option>
          <option value="Analog">Analog</option>
          <option value="Digital">Digital</option>
          <option value="Smartwatch">Smartwatch</option>
        </select>

        <select onChange={(e) => setsort(e.target.value)}>
          <option value="">Sort</option>
          <option value="low">Price Low → High</option>
          <option value="high">Price High → Low</option>
        </select>

      </div>

      {/* 🛒 Cards */}
      <div className="container">
        {filteredData.length > 0 ? (
          filteredData.map((d) => (
            <div className="card" key={d.id}>
              <img src={d.image} alt={d.name} />
              <h3>{d.name}</h3>
              <p>₹{d.price}</p>
              <span className="tag">{d.category}</span>
              <button>Add to Cart</button>
            </div>
          ))
        ) : (
          <p className="no-data">No product found</p>
        )}
      </div>

    </div>
  )
}

export default Datatable