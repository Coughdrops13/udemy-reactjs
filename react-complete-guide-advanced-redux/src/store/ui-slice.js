import { createSlice } from '@reduxjs/toolkit';

const initialUIState = {
  cartIsVisible: false,
  notification: null,
};

const uISlice = createSlice({
  name: "ui",
  initialState: initialUIState,
  reducers: {
    toggleVisibility(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      }
    }

  }
});

export const uIActions = uISlice.actions;

export default uISlice.reducer; 