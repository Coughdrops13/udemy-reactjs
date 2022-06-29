import { createSlice, createStore } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--
    },
    increase(state, action) {
      state.counter += action.amount;
    },
  }
})

// const counterReducer = (state = initialState, action) => {
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
//       return initialState;
//     }
// };

const store = createStore(counterSlice.reducer);

export default store;
