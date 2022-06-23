import { useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return {
      value: action.value,
      isTouched: state.isTouched
    };
  }

  if (action.type === "BLUR") {
    return {
      value: state.value,
      isTouched: true,
    }
  }

  if (action.type === "RESET") {
    return initialInputState;
  }

  return inputStateReducer;
};

const useInput2 = (validateValue) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const valueIsValid2 = validateValue(inputState.value);
  const isError2 = !valueIsValid2 && inputState.isTouched;

  const valueChangeHandler2 = (event) => {
    dispatch({
      type: "INPUT",
      value: event.target.value,
    });
  };

  const inputBlurHandler2 = (event) => {
    dispatch({
      type: "BLUR"
    });
  };

  const reset2 = (event) => {
    dispatch({type: "RESET"})
  };
  return {
    value2: inputState.value,
    isValid2: valueIsValid2,
    isError2,
    valueChangeHandler2,
    inputBlurHandler2,
    reset2,
  };
};

export default useInput2;
