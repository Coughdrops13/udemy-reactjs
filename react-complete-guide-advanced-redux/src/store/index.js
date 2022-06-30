import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './cart-slice';
import uIReducer from './ui-slice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    ui: uIReducer,
  }
})

export default store;