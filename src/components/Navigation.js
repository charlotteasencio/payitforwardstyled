import React from 'react';
import { Link } from 'react-router-dom';

import AuthUserContext from './AuthUserContext';
import SignOutButton from './SignOut';
import * as routes from '../constants/routes';
import "./Navigation.css";

const Navigation = () =>
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>

const NavigationAuth = () =>
<div>
<nav className="navbar-fixed-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 sticky-top navbar">
    <Link className="link" to={routes.LANDING}>Landing</Link>
    <Link className="link" to={routes.HOME}>Home</Link>
    <Link className="link" to={routes.ACCOUNT}>Account</Link>
    <SignOutButton />
</nav>
</div>

const NavigationNonAuth = () =>
<div>
<nav className="className=navbar-fixed-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 sticky-top navbar">
    <Link className="link" to={routes.LANDING}>Landing</Link>
    <Link className="link" to={routes.SIGN_IN}>Volunteer Sign In</Link>
    <Link className="link" to={routes.ORG_SIGN_IN}>Organization Sign In</Link>
</nav>
</div>


export default Navigation;