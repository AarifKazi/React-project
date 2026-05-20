import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    isAuthenticated: localStorage.getItem("isAuthenticated") === "true",
    user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null
}

const productSlice = createSlice({
    name: 'products',

    initialState,

    reducers: {

        setProducts: (state, action) => {
            state.products = action.payload
        },

        addProduct: (state, action) => {
            state.products.push(action.payload)
        },

        deleteProduct: (state, action) => {
            state.products = state.products.filter(
                item => item.id !== action.payload
            )
        },

        updateProduct: (state, action) => {
            const index = state.products.findIndex(
                item => item.id === action.payload.id
            )
            if (index !== -1) {
                state.products[index] = action.payload
            }
        },

        loginUser: (state, action) => {
            state.isAuthenticated = true
            state.user = action.payload
            localStorage.setItem("isAuthenticated", "true")
            localStorage.setItem("user", JSON.stringify(action.payload))
        },

        logoutUser: (state) => {
            state.isAuthenticated = false
            state.user = null
            localStorage.removeItem("isAuthenticated")
            localStorage.removeItem("user")
        }

    }
})

export const {
    setProducts,
    addProduct,
    deleteProduct,
    updateProduct,
    loginUser,
    logoutUser
} = productSlice.actions

export default productSlice.reducer