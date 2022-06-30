import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
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
      state.counter += action.payload;
    },
  }
})

const initialAuthState = {
  isAuthenticated: false
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  }
})


// with multiple slices, there can be multiple reducers given to the configureSlice method
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

export const counterActions = counterSlice.actions;

export default store;

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



