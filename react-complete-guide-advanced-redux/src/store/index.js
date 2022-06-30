import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './cart-slice';

const store = configureStore({
  reducers: {
    cart: cartReducer,
  }
})

export default store;