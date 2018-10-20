import React from 'react';
//import './SignOut.css';
import { auth } from '../firebase';

const SignOutButton = () =>
  <button
    type="button"
    onClick={auth.doSignOut}
    className="navButton"
    id="signOutButton"
  >
    Sign Out
  </button>

export default SignOutButton;