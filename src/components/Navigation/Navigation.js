import React from 'react';

import AuthUserContext from '../AuthUserContext';
import {NavigationAuth} from '../NavigationAuth';
import {NavigationNonAuth} from '../NavigationNonAuth';
import "../Navigation/Navigation.css";


const Navigation = () =>
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>

export default Navigation;