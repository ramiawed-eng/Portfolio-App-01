import React, { useState } from 'react';
import validator from 'validator';

// components
import { ReactComponent as Logo } from '../../assets/logo.svg';
import InputForm from '../../components/input-form/input-form.component';

// styles
import './signInSignUpPage-page.styles.scss';

// this page use for sign-in or sign-up
const SignInSignUpPage = () => {
  // boolean state to determine if this form for signin or signup
  // true for signup
  // false for signin
  const [signup, setSignup] = useState(false);

  // state for each field
  // field for name
  // this field use just in signup
  const [name, setName] = useState('');
  // field for email
  const [email, setEmail] = useState('');
  // field for password
  const [password, setPassword] = useState('');
  // field for confirm password
  // this field use just in signup
  const [confirmPassword, setConfirmPassword] = useState('');

  // states for errors
  // name error
  const [errorName, setErrorName] = useState('');

  // email error
  const [errorEmail, setErrorEmail] = useState('');

  // password error
  const [errorPassword, setErrorPassword] = useState('');

  // confirm password error
  const [errorConfirmPassword, setErrorConfirmPassword] = useState('');

  // reset all fields
  const resetFields = () => {
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  // reset all error fields
  const resetErrorFields = () => {
    setErrorName('');
    setErrorEmail('');
    setErrorPassword('');
    setErrorConfirmPassword('');
  };

  // toggle signin and signup
  const signin = (e) => {
    e.preventDefault();
    setSignup(!signup);

    // reset all field
    resetFields();

    // reset all errors
    resetErrorFields();
  };

  // handle submit action
  const handleSubmit = (e) => {
    e.preventDefault();

    let isError = false;

    // email should not be empty
    if (!email) {
      setErrorEmail('please enter an email');
      isError = true;
    }
    // email should be a valid email
    else if (!validator.isEmail(email)) {
      setErrorEmail('Please enter a valid email');
      isError = true;
    }

    // password should not be empty
    if (!password) {
      setErrorPassword('please enter a password');
      isError = true;
    }

    // signup
    if (signup) {
      if (!name) {
        setErrorName('please enter a name.');
        isError = true;
      }
      if (!confirmPassword) {
        setErrorConfirmPassword('please enter a confrim password');
        isError = true;
      } else if (password !== confirmPassword) {
        setErrorConfirmPassword('please enter a match password');
        isError = true;
      }
    }

    if (isError) {
      return;
    }
  };

  return (
    <div className='sign-in-page-wrapper'>
      <div className={`${signup ? 'expanded' : 'collapsed'} sign-in-page `}>
        <Logo className='sign-in-page-logo' />

        <div className='sign-in-page-header'>
          <h2>{signup ? 'Sign Up' : 'Sign In'}</h2>
        </div>

        <form className='sign-in-page-content'>
          {/* input field for name field
            this field shows just in signup form
          */}
          <InputForm
            label='Name'
            value={name}
            handleChange={(e) => {
              setName(e.target.value);
              setErrorName('');
            }}
            error={errorName}
            display={signup}
          />

          {/* input field for email field
           */}
          <InputForm
            label='Email'
            value={email}
            handleChange={(e) => {
              setEmail(e.target.value);
              setErrorEmail('');
            }}
            error={errorEmail}
            display={true}
          />

          {/* input field for password field
           */}
          <InputForm
            type='password'
            label='Password'
            value={password}
            handleChange={(e) => {
              setPassword(e.target.value);
              setErrorPassword('');
            }}
            error={errorPassword}
            display={true}
          />

          {/* input field for confirm password field
            this field shows just in signup form
          */}
          <InputForm
            type='password'
            label='Confirm Password'
            value={confirmPassword}
            handleChange={(e) => {
              setConfirmPassword(e.target.value);
              setErrorConfirmPassword('');
            }}
            error={errorConfirmPassword}
            display={signup}
          />

          <button type='submit' onClick={(e) => handleSubmit(e)}>
            {signup ? 'Sign Up' : 'Sign In'}
          </button>
        </form>
      </div>

      <div className='have-account'>
        <p>
          {signup ? `I already have an account.` : `You don't have an account?`}{' '}
          <button
            onClick={(e) => {
              signin(e);
            }}
          >
            {!signup ? 'Sign Up' : 'Sign In'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignInSignUpPage;
