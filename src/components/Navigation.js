import React from 'react';
import { Link } from 'react-router-dom';

import AuthUserContext from './AuthUserContext';
import SignOutButton from './SignOut';
import * as routes from '../constants/routes';
//import "./Navigation.css";
import Logo from './images/logo2.png';
import {NavigationAuth} from './NavigationAuth';
import "../index.css";


const Navigation = () =>
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>

// const NavigationAuth = () =>
// <div>
//   <nav className="navbarNonAuth">
//       <div className="logoDiv">
//           <Link className="navlink" to={routes.LANDING}><img className="logo" alt="logo" src={Logo}></img></Link>
//           <Link className="navlink" id="home" to={routes.LANDING}>PAY IT FORWARD</Link>
//       </div>
//       <div className="navRight">
//         <div className="menuButton"><i className="fas fa-bars"></i></div>
//         <ul className="navLinks">
//           <Link className="navlink" to={routes.LANDING}>Home</Link>
//           <Link className="navlink" to={routes.HOME}>Profile</Link>
//           <Link className="navlink" to={routes.ACCOUNT}>Account</Link>
//           <div className="signOut"><SignOutButton /></div>
//         </ul>
//       </div>
//   </nav>
// </div>

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
          <Link className="navlink" to={routes.SIGN_IN}>Volunteer Sign In</Link>
          <Link className="navlink" to={routes.ORG_SIGN_IN}>Organization Sign In</Link>
        </ul>
      </div>
  </nav>
</div>


export default Navigation;