import React from 'react';

import AuthUserContext from './AuthUserContext';
import {NavigationAuth} from './NavigationAuth';
import {NavigationNonAuth} from './NavigationNonAuth';
import "../index.css";

//import "./OrgNavigation.css"

const OrgNavigation = () =>
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>

export default OrgNavigation;