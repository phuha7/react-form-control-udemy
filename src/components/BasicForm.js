import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: firstName,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput
  } =useInput(value => value.trim() !== '');

  let formIsValid = false;

  if (firstNameIsValid) {
    formIsValid = true
  };

  const formSubmitHandler = () => {
    if (!formIsValid) {
      return;
    };
    resetFirstNameInput();
  };

  const firstNameClasses = firstNameHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        <div className={firstNameClasses}>
          <label htmlFor='name'>First Name</label>
          <input 
            type='text'   
            id='first-name' 
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={firstName}
            />
            {firstNameHasError && <p className="error-text">First name must not be empty</p>}
        </div>
        <div className='form-control'>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='last-name' />
        </div>
      </div>
      <div className='form-control'>
        <label htmlFor='email'>E-Mail Address</label>
        <input type='email' id='email' />
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
