import React from 'react';

import classes from './Input.module.css';

const Input = (props) => {
  
  
  return (
    <div
      className={`${classes.control} ${
        props.emailState.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor="email">E-Mail</label>
      <input
        type="email"
        id="email"
        value={props.emailState.value}
        onChange={props.emailChangeHandler}
        onBlur={props.validateEmailHandler}
      />
    </div>
  );
};

export default Input;
