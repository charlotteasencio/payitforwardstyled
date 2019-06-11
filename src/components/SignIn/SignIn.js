import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { SignUpLink } from '../SignUp/SignUp';
import { PasswordForgetLink } from '../PasswordForget/PasswordForget';
import { auth } from '../../firebase';
import * as routes from '../../constants/routes';
import Navigation from '../Navigation/Navigation';
import "./SignIn.css"

const SignInPage = ({ history }) =>
  <div>
    <Navigation />
    <div className="signInSection">
    <SignInForm history={history} />
    <SignUpLink />
    <PasswordForgetLink />
    </div>
  </div>

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
  displayName: ''
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
      <div>
        <div className="signInHeader">
          <h1>Volunteer Sign In</h1>
          <p>Please sign in to your volunteer user account.</p>
        </div>
          <form onSubmit={this.onSubmit} className="signUpForm">
              <input className="emailbox"
                value={email}
                onChange={event => this.setState(byPropKey('email', event.target.value))}
                type="text"
                placeholder="Email Address"
                className="volSignInInput"
              />
              <input className="passwordbox"
                value={password}
                onChange={event => this.setState(byPropKey('password', event.target.value))}
                type="password"
                placeholder="Password"
                className="volSignInInput"
              />
              <button className="basicButtonBlue" id="signinbtn" disabled={isInvalid} type="submit">
                Sign In
              </button>
            { error && <p>{error.message}</p> }
        </form>
    </div>
    );
  }
}

export default withRouter(SignInPage);

export {
  SignInForm,
};