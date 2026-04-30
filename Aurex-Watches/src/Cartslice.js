import { createSlice } from "@reduxjs/toolkit";

const data = JSON.parse(localStorage.getItem('item-data'))
const initialState ={
    cart:data || [] ,
}

const cartslice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addtocart : (state,action)=>{
           const exisitngitem = state.cart.find((item)=>item.id === action.payload.id)

           if(exisitngitem){
            exisitngitem.qty+=1
           }
           else{
            state.cart.push({...action.payload,qty:1})
           }
        },
        increment:(state,action)=>{
            const increase = state.cart.find((f)=>f.id == action.payload)
            if(increase){
                increase.qty+=1
            }
        },
        decrement:(state,action)=>{
            const decrease = state.cart.find((f)=>f.id == action.payload)
            if(decrease.qty > 1){
                decrease.qty-=1
            }
        },
        removeitem:(state,action)=>{
            state.cart = state.cart.filter((i)=>i.id !== action.payload)
        },
        clearitem:(state,action)=>{
            state.cart = []
        }
    }

})

export const {addtocart,increment,decrement,removeitem,clearitem} = cartslice.actions
export default cartslice.reducer;