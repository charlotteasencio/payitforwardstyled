import React from 'react';

import AuthUserContext from '../AuthUserContext';
import {OrgNavAuth} from '../OrgNavAuth/OrgNavAuth';
import {NavigationNonAuth} from '../NavigationNonAuth';

const OrgNavigation = () =>
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <OrgNavAuth />
      : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>

export default OrgNavigation;