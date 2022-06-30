import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {

};

const cartSlice = {
  name: 'cart',
  initialState: initialCartState,
  reducers: {

  }
};

export const cartActions = cartSlice.actions

export default cartSlice.reducer;