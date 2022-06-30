import { createSlice } from '@reactjs/toolkit';

const initialUIState = {
  cartIsVisible: false,
};

const uISlice = createSlice({
  name: "ui",
  initialState: initialUIState,
  reducers: {
    toggleVisibility(state) {
      state.cartIsVisible = !state.cartIsVisible;
    }
  }
});

export const uIActions = uISlice.actions;

export default uISlice.reducer; 