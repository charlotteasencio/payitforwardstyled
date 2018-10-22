import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { PasswordForgetLink } from './PasswordForget';
import { auth } from '../firebase';
import * as routes from '../constants/routes';
import { OrgSignUpLink } from './OrgSignUp';
//import "./OrgSignIn.css"
import OrgNavigation from "./OrgNavigation";


const OrgSignInPage = ({ history }) =>
  <div>
    <OrgNavigation />
    <OrgSignInForm history={history} />
    
    <OrgSignUpLink />
    <PasswordForgetLink />
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

class OrgSignInForm extends Component {
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
        history.push(routes.ORG_HOME);
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
        <h1>Organization Sign In</h1>
        <p>Please sign in to your organization user account.</p>
      </div>

      <form onSubmit={this.onSubmit}  className="signInForm">
      <div class="form-group">
        <input className="emailbox"
          value={email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type="text"
          placeholder="Email Address"
          className="orgSignInInput"
        />
      </div>
      <div class="form-group">
        <input className="passwordbox"
          value={password}
          onChange={event => this.setState(byPropKey('password', event.target.value))}
          type="password"
          placeholder="Password"
          className="orgSignInInput"
        />
        </div>
        <button disabled={isInvalid} type="submit" className="basicButtonBlue">
          Sign In
        </button>
        { error && <p>{error.message}</p> }
      </form>
    </div>
      
    );
  }
}

export default withRouter(OrgSignInPage);

export {
  OrgSignInForm,
};