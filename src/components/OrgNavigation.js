import React from 'react';
import { Link } from 'react-router-dom';

import AuthUserContext from './AuthUserContext';
import SignOutButton from './SignOut';
import * as routes from '../constants/routes';
import Logo from "./images/logo2.png";

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
  <nav className="navbarNonAuth">
      <div className="logoDiv">
          <Link className="navlink" to={routes.LANDING}><img className="logo" alt="logo" src={Logo}></img></Link>
          <Link className="navlink" id="home" to={routes.LANDING}>PAY IT FORWARD</Link>
      </div>
      <div className="navRight">
        <div className="menuButton"><i className="fas fa-bars"></i></div>
        <ul className="navLinks">
          <div className="leftnavlink"><Link className="navlink" to={routes.LANDING}>Home</Link></div>
          <div className="leftnavlink"><Link className="navlink" to={routes.HOME}>Profile</Link></div>
          <div className="leftnavlink"><Link className="navlink" to={routes.ACCOUNT}>Account</Link></div>
          <div className="signOut"><SignOutButton /></div>
        </ul>
      </div>
  </nav>
</div>

const NavigationNonAuth = () =>

<div>
  <nav className="navbarNonAuth">
      <div className="logoDiv">
          <Link className="navlink" to={routes.LANDING}><img className="logo" alt="logo" src={Logo}></img></Link>
          <Link className="navlink" id="home" to={routes.LANDING}>PAY IT FORWARD</Link>
      </div>
      <div className="navRight">
        <div className="menuButton"><i className="fas fa-bars"></i></div>
        <ul className="navLinks">
          <Link className="navlink" to={routes.SIGN_IN}><li>Volunteer Sign In</li></Link>
          <Link className="navlink" to={routes.ORG_SIGN_IN}><li>Organization Sign In</li></Link>
        </ul>
      </div>
  </nav>
</div>


export default OrgNavigation;