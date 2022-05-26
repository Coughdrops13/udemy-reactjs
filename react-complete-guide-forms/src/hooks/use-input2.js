import { useState } from "react";

const useInput2 = (validateValue) => {
  const [enteredValue2, setEnteredValue2] = useState("");
  const [isTouched2, setIsTouched2] = useState(false);

  const valueIsValid2 = validateValue(enteredValue2);
  const isError2 = !valueIsValid2 && isTouched2;

  const valueChangeHandler2 = (event) => {
    setEnteredValue2(event.target.value);
  };

  const inputBlurHandler2 = (event) => {
    setIsTouched2(true);
  };

  const reset2 = (event) => {
    setIsTouched2(false);
    setEnteredValue2("");
  };
  return {
    value2: enteredValue2,
    isValid2: valueIsValid2,
    isError2,
    valueChangeHandler2,
    inputBlurHandler2,
    reset2,
  };
};

export default useInput2;
