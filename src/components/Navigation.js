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
  <nav className = "navbarAuthVol navbar-expand-sm fixed-top navbar-light">
     <div><Link className="link" to={routes.LANDING}>Home</Link></div>
     <div><Link className="link" to={routes.HOME}>Profile</Link></div>
     <div><Link className="link" to={routes.ACCOUNT}>Account</Link></div>
     <div className="signOut"><SignOutButton /></div>
  </nav>
</div>

const NavigationNonAuth = () =>
<div>
    <nav className = "navbarNonAuth navbar-expand-sm fixed-top navbar-light">
          <Link className="link" to={routes.LANDING}>Home</Link>
          <div className = "rightSide">
            <Link to={routes.SIGN_IN}>Volunteer Sign In</Link>
            <Link to={routes.ORG_SIGN_IN}>Organization Sign In</Link>
        </div>
    </nav>
</div>


export default Navigation;