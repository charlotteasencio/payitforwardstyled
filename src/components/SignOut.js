import React from 'react';
//import './SignOut.css';
import { auth } from '../firebase';

const SignOutButton = () =>
  <button
    type="button"
    onClick={auth.doSignOut}
    className="navButton"
  >
    Sign Out
  </button>

export default SignOutButton;