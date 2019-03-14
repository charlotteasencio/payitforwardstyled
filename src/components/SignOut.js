import React from 'react';
//import './SignOut.css';
import { auth } from '../firebase';

const SignOutButton = () =>
  <a
    type="button"
    onClick={auth.doSignOut}
    className="signOutButton"
    id="signOutButton"
  >
    Log Out
  </a>

export default SignOutButton;