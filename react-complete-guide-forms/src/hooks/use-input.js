import { useState } from 'react';

const useInput = (validateValue,) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [enteredValueTouched, setEnteredValueTouched] = useState(false);

  const enteredValueIsValid = enteredValue.trim() !== "";
  const hasError = !enteredValueIsValid && enteredValueTouched;

};

export default useInput;