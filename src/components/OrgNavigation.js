import React from 'react';
import { Link } from 'react-router-dom';

import AuthUserContext from './AuthUserContext';
import SignOutButton from './SignOut';
import * as routes from '../constants/routes';
//import logo from "./images/logo.png";

//import "./OrgNavigation.css"

const OrgNavigation = () =>
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>

const NavigationAuth = () =>
<div>
  <nav className = "navbarAuthOrg navbar-expand-sm navbar-light">
    <div className="link"><Link className="link" to={routes.ORG_LANDING}>Home</Link></div>
    <div className="link"><Link className="link" to={routes.ORG_HOME}>Profile</Link></div>
    <div className="link"><Link className="link" to={routes.ORG_ACCOUNT}>My Account</Link></div>
    <div className="signOut"><SignOutButton /></div>
  </nav>
</div>

const NavigationNonAuth = () =>
<div>
  <nav className = "navbarNonAuth navbar-expand-sm navbar-light">
    <div><Link className="link" to={routes.LANDING}>Home</Link></div>
    <div><Link className="link" to={routes.SIGN_IN}>Volunteer Sign In</Link></div>
    <div><Link className="link" to={routes.ORG_SIGN_IN}>Organization Sign In</Link></div>
  </nav>
</div>

export default OrgNavigation;