import React from 'react';

import AuthUserContext from '../AuthUserContext';
import {OrgNavAuth} from '../OrgNavAuth/OrgNavAuth';
import {NavigationNonAuth} from '../NavigationNonAuth';
import "./OrgNavigation.css";

const OrgNavigation = () =>
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <OrgNavAuth />
      : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>

export default OrgNavigation;