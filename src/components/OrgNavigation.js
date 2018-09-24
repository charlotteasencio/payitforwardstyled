import React from 'react';
import { Link } from 'react-router-dom';

import AuthUserContext from './AuthUserContext';
import SignOutButton from './SignOut';
import * as routes from '../constants/routes';

import "./OrgNavigation.css"

const OrgNavigation = () =>
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>

const NavigationAuth = () =>
<div>
  <nav className = "navbarAuthOrg navbar-expand-sm fixed-top navbar-light">
      <Link to={routes.ORG_LANDING}>Home</Link>
      <Link to={routes.ORG_HOME}>Profile</Link>
      <Link to={routes.ORG_ACCOUNT}>My Account</Link>
      <SignOutButton className="orgsignoutbtn"/>
    </nav>
</div>


const NavigationNonAuth = () =>
<div>
  <nav className = "navbarNonAuth navbar-expand-sm fixed-top navbar-light">
        <Link to={routes.LANDING}>Home</Link>
        <div className = "rightSide">
          <Link to={routes.SIGN_IN}>Volunteer Sign In</Link>
          <Link to={routes.ORG_SIGN_IN}>Organization Sign In</Link>
        </div>
  </nav>
</div>

export default OrgNavigation;