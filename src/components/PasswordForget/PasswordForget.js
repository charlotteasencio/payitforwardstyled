import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase';
import Navigation from "../Navigation/Navigation";
import "./PasswordForget.css";

const PasswordForgetPage = () =>
  <div>
    <Navigation />
    <h1>Enter your email to retrieve your password</h1>
    <PasswordForgetForm />
  </div>

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  error: null,
};

class PasswordForgetForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email } = this.state;

    auth.doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      error,
    } = this.state;

    const isInvalid = email === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={this.state.email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type="text"
          placeholder="Email Address"
          className="passwordForgetFormInput"
        />
        <button disabled={isInvalid} type="submit" className="basicButtonBlue">
          Get my Password
        </button>

        { error && <p>{error.message}</p> }
      </form>
    );
  }
}

const PasswordForgetLink = () =>
  <div className="forgotPasswordLink">
    <Link to="/pw-forget">Forgot Password?</Link>
  </div>

export default PasswordForgetPage;

export {
  PasswordForgetForm,
  PasswordForgetLink,
};