import React from 'react';

import AuthUserContext from './AuthUserContext';
import {OrgNavAuth} from './OrgNavAuth';
import {NavigationNonAuth} from './NavigationNonAuth';
import "../index.css";

const OrgNavigation = () =>
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <OrgNavAuth />
      : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>

export default OrgNavigation;