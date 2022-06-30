import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          itemId: newItem.id,
          title: newItem.title,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price
        });
      }
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }
    },
    removeItemFromCart(state, action) {

    },
  }
});

export const cartActions = cartSlice.actions

export default cartSlice.reducer;