import { createSlice } from '@reactjs/toolkit';

const initialUIState = {

};

const uISlice = createSlice({
  name: "ui",
  initialState: initialUIState,
  reducers: {

  }
});

export const uIActions = uISlice.actions;

export default uISlice.reducer; 