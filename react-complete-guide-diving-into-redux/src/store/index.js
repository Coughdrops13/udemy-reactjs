import { createStore } from "redux";

const initialState = {
  counter: 0,
  showCounter: true,
}

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "toggle":
      return {
        ...state,
        showCounter: !state.showCounter,
      }
    case 'increment':
      return {
        ...state,
        counter: state.counter + 1,
      }
    case 'decrement':
      return {
        ...state,
        counter: state.counter - 1,
      }
    case 'increase':
      return {
        ...state,
        counter: state.counter + action.amount,
      }
    default:
      return initialState;
    }
};

const store = createStore(counterReducer);

export default store;
