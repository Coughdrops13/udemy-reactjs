import useInput2 from "../hooks/use-input2";

const BasicForm = (props) => {
  const {
    value2: enteredFirstName,
    isValid2: enteredFirstNameIsValid,
    isError2: firstNameInputHasError,
    valueChangeHandler2: firstNameInputChangeHandler,
    inputBlurHandler2: firstNameInputBlurHandler,
    reset2: resetFirstNameInput,
  } = useInput2((value) => value.trim() !== "");

  const {
    value2: enteredLastName,
    isValid2: enteredLastNameIsValid,
    isError2: lastNameInputHasError,
    valueChangeHandler2: lastNameInputChangeHandler,
    inputBlurHandler2: lastNameInputBlurHandler,
    reset2: resetLastNameInput,
  } = useInput2((value) => value.trim() !== "");

  const {
    value2: enteredEmail,
    isValid2: enteredEmailIsValid,
    isError2: emailInputHasError,
    valueChangeHandler2: emailInputChangeHandler,
    inputBlurHandler2: emailInputBlurHandler,
    reset2: resetEmailInput,
  } = useInput2((value) =>
    value.trim().match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)
  );

  let formIsValid = false;
  if (
    enteredFirstNameIsValid &&
    enteredLastNameIsValid &&
    enteredEmailIsValid
  ) {
    console.log("FUCK ALBERTA");
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (
      !enteredFirstNameIsValid ||
      !enteredLastNameIsValid ||
      !enteredEmailIsValid
    ) {
      return;
    }

    console.log("Entered First Name", enteredFirstName);
    console.log("Entered Last Name", enteredLastName);
    console.log("Entered Email", enteredEmail);

    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
  };

  const firstNameInputClasses = !firstNameInputHasError
    ? "form-control"
    : "form-control invalid";
  const lastNameInputClasses = !lastNameInputHasError
    ? "form-control"
    : "form-control invalid";
  const emailInputClasses = !emailInputHasError
    ? "form-control"
    : "form-control invalid";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={firstNameInputClasses}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={enteredFirstName}
            onChange={firstNameInputChangeHandler}
            onBlur={firstNameInputBlurHandler}
          />
        </div>
        {firstNameInputHasError && (
          <p className="error-text">Please enter a valid first name.</p>
        )}
        <div className={lastNameInputClasses}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={enteredLastName}
            onChange={lastNameInputChangeHandler}
            onBlur={lastNameInputBlurHandler}
          />
        </div>
        {lastNameInputHasError && (
          <p className="error-text">Please enter a valid last name.</p>
        )}
        <div className={emailInputClasses}>
          <label htmlFor="email">E-Mail Address</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailInputChangeHandler}
            onBlur={emailInputBlurHandler}
          />
        </div>
        {emailInputHasError && (
          <p className="error-text">Please enter a valid email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
