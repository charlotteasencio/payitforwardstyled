import React from 'react';

import AuthUserContext from './AuthUserContext';
import {NavigationAuth} from './NavigationAuth';
import {OrgNavAuth} from './OrgNavAuth';
import {NavigationNonAuth} from './NavigationNonAuth';
import "../index.css";

//import "./OrgNavigation.css"

const OrgNavigation = () =>
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <OrgNavAuth />
      : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>

export default OrgNavigation;