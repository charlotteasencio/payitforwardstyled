import React from 'react';
import { Link } from 'react-router-dom';

import AuthUserContext from './AuthUserContext';
import SignOutButton from './SignOut';
import * as routes from '../constants/routes';
//import "./Navigation.css";
//import logo from "./images/logo.png";


const Navigation = () =>
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>

const NavigationAuth = () =>
<div>
  <nav className = "navbarAuthVol navbar-expand-sm navbar-light">
    <div className="navlink"><Link className="navlink" to={routes.LANDING}>Home</Link></div>
    <div className="navlink"><Link className="navlink" to={routes.HOME}>Profile</Link></div>
    <div className="navlink"><Link className="navlink" to={routes.ACCOUNT}>Account</Link></div>
    <div className="signOut"><SignOutButton /></div>
  </nav>
</div>

const NavigationNonAuth = () =>
<div>
  <nav className = "navbarNonAuth navbar-expand-sm navbar-light">
      <div><Link className="navlink" id="home" to={routes.LANDING}><button className="navButton">Home</button></Link></div>
      <div><Link className="navlink" to={routes.SIGN_IN}>Volunteer Sign In</Link></div>
      <div><Link className="navlink" to={routes.ORG_SIGN_IN}>Organization Sign In</Link></div>
  </nav>
</div>


export default Navigation;