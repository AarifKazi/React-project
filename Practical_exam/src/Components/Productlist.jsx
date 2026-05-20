import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchProducts } from './Redux/Thunk'

import './productlist.css'

function ProductList() {

    const dispatch = useDispatch()

    const products = useSelector(
        state => state.products.products
    )

    const [search,setsearch] = useState("")
    const [category,setcategory] = useState("")
    const [sort,setsort] = useState("")


    useEffect(()=>{

        dispatch(fetchProducts())

    },[])



    let filterdata = [...products]



    // Search

    filterdata = filterdata.filter((item)=>

        item.title.toLowerCase().includes(
            search.toLowerCase()
        )
    )



    // Filter

    if(category){

        filterdata = filterdata.filter(
            item => item.category === category
        )
    }



    // Sorting

    if(sort === "low"){

        filterdata.sort((a,b)=>
            a.price - b.price
        )
    }


    if(sort === "high"){

        filterdata.sort((a,b)=>
            b.price - a.price
        )
    }



  return (

    <div className='product-list-container'>

        <h1 className='heading'>
            Book Collection
        </h1>



        <div className='top-controls'>

            <input
            type="text"
            placeholder='Search Book...'
            value={search}
            onChange={(e)=>setsearch(e.target.value)}
            />



            <select
            value={category}
            onChange={(e)=>setcategory(e.target.value)}
            >

                <option value="">
                    All Categories
                </option>

                <option value="Novel">
                    Novel
                </option>

                <option value="Finance">
                    Finance
                </option>

                <option value="Motivation">
                    Motivation
                </option>

                <option value="Self Help">
                    Self Help
                </option>

            </select>



            <select
            value={sort}
            onChange={(e)=>setsort(e.target.value)}
            >

                <option value="">
                    Sort By Price
                </option>

                <option value="low">
                    Low To High
                </option>

                <option value="high">
                    High To Low
                </option>

            </select>

        </div>



        <div className='product-grid'>

            {
                filterdata.map((item)=>(

                    <div
                    className='product-card'
                    key={item.id}
                    >

                        <img
                        src={item.image}
                        alt=""
                        />



                        <div className='product-content'>

                            <h2>
                                {item.title}
                            </h2>


                            <h3>
                                ₹ {item.price}
                            </h3>


                            <p>
                                {item.category}
                            </p>

                        </div>

                    </div>

                ))
            }

        </div>

    </div>

  )
}

export default ProductList