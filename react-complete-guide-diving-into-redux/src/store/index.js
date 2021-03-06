import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter-slice";
import authReducer from "./auth-slice";

// with multiple slices, there can be multiple reducers given to the configureSlice method
const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

export default store;


// reducer with redux and without reduxjs/toolkit
// const counterReducer = (state = initialCounterState, action) => {
//   switch (action.type) {
//     case "toggle":
//       return {
//         ...state,
//         showCounter: !state.showCounter,
//       }
//     case 'increment':
//       return {
//         ...state,
//         counter: state.counter + 1,
//       }
//     case 'decrement':
//       return {
//         ...state,
//         counter: state.counter - 1,
//       }
//     case 'increase':
//       return {
//         ...state,
//         counter: state.counter + action.amount,
//       }
//     default:
//       return initialCounterState;

//     }
// };



