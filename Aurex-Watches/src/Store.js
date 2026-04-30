import { configureStore } from "@reduxjs/toolkit";
import cartslice from './Cartslice.js'

const store = configureStore({
    reducer:{
        cart:cartslice,

    }
})

export default store