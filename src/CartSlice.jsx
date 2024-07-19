import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
       const {name, image, cost} = action.payload
       const item = state.items.find(e => e.name = name)
       if (item){
        item.quantity++
       } else{
        state.items.push({name, image, cost, quantity: 1})
       }
    },
    removeItem: (state, action) => {
        state.items = state.items.filter(item => item.name !== action.payload)
    },
    updateQuantity: (state, action) => {
        const {name, quantity} = action.payload 
        const item = state.items.find(el => el.name == name)
        if (item){
            item.quantity = quantity
        }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
