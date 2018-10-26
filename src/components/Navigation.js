import React from 'react';
import { Link } from 'react-router-dom';

import AuthUserContext from './AuthUserContext';
import SignOutButton from './SignOut';
import * as routes from '../constants/routes';
//import "./Navigation.css";
import Logo from './images/logo2.png';
import "../index.css";


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
   <div className="navLeft">
     <Link className="navlink" to={routes.LANDING}><img className="logo" src={Logo}></img></Link>
    <div className="leftnavlink"><Link className="navlink" to={routes.LANDING}>Home</Link></div>
    <div className="leftnavlink"><Link className="navlink" to={routes.HOME}>Profile</Link></div>
    <div className="leftnavlink"><Link className="navlink" to={routes.ACCOUNT}>Account</Link></div>
  </div>
    <div className="signOut"><SignOutButton /></div>
  </nav>
</div>

const NavigationNonAuth = () =>
<div>
  <nav className = "navbarNonAuth navbar-expand-sm navbar-light">
      <div>
        <Link className="navlink" to={routes.LANDING}><img className="logo" src={Logo}></img></Link>
        <Link className="navlink" id="home" to={routes.LANDING}>PAY IT FORWARD</Link></div>
    <div className="navRight">
      <div><Link className="navlink" to={routes.SIGN_IN}><button className="pinkOutlineButton">Volunteer Sign In</button></Link></div>
      <div><Link className="navlink" to={routes.ORG_SIGN_IN}><button className="pinkOutlineButton">Organization Sign In</button></Link></div>
    </div>
  </nav>
</div>


export default Navigation;