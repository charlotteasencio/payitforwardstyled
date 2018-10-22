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
  <nav className = "navbarAuthOrg navbar-expand-sm navbar-light">
  <div className="navLeft">
    <img src={Logo}></img>
    <div className="leftnavlink"><Link className="link" to={routes.ORG_LANDING}>Home</Link></div>
    <div className="leftnavlink"><Link className="link" to={routes.ORG_HOME}>Profile</Link></div>
    <div className="leftnavlink"><Link className="link" to={routes.ORG_ACCOUNT}>My Account</Link></div>
  </div>
    <div className="signOut"><SignOutButton /></div>
  </nav>
</div>

const NavigationNonAuth = () =>
<div>
  <nav className = "navbarNonAuth navbar-expand-sm navbar-light">
    <div>
    <img src={Logo}></img>
    <Link className="link" to={routes.LANDING}>PAY IT FORWARD</Link></div>
  <div className="navRight">
    <div><Link className="link" to={routes.SIGN_IN}><button className="pinkOutlineButton">Volunteer Sign In</button></Link></div>
    <div><Link className="link" to={routes.ORG_SIGN_IN}><button className="pinkOutlineButton">Organization Sign In</button></Link></div>
  </div>
  </nav>
</div>

export default OrgNavigation;