import React from 'react';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import LandingPage from './Landing/Landing';
import SignUpPage from './SignUp/SignUp';
import SignInPage from './SignIn/SignIn';
import PasswordForgetPage from './PasswordForget/PasswordForget';
import HomePage from './Home/Home';
import AccountPage from './Account/Account';

import OrgSignUpPage from './OrgSignUp/OrgSignUp';
import OrgSignInPage from './OrgSignIn/OrgSignIn';
import OrgAccountPage from './OrgAccount/OrgAccount';
import OrgHomePage from './OrgHome/OrgHome';
import OrgLandingPage from './OrgLanding/OrgLanding';

import PostOppPage from './PostOpp/PostOpp'
import ViewOppsPage from './ViewOpps/ViewOpps' 

import * as routes from '../constants/routes';
import withAuthentication from './withAuthentication';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faTimes, faChevronCircleDown, faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';

library.add(faBars)
library.add(faTimes)
library.add(faChevronCircleDown)
library.add(faChevronCircleUp)

const App = () =>
  <Router>
    <div>

      <Route exact path={routes.LANDING} component={() => <LandingPage />} />
      <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
      <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
      <Route exact path={routes.PASSWORD_FORGET} component={() => <PasswordForgetPage />} />
      <Route exact path={routes.HOME} component={() => <HomePage />} />
      <Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />

      <Route exact path={routes.ORG_SIGN_UP} component={() => <OrgSignUpPage />} />
      <Route exact path={routes.ORG_SIGN_IN} component={() => <OrgSignInPage />} />
      <Route exact path={routes.ORG_ACCOUNT} component={() => <OrgAccountPage />} />
      <Route exact path={routes.ORG_HOME} component={() => <OrgHomePage />} />
      <Route exact path={routes.ORG_LANDING} component={() => <OrgLandingPage />} />

      <Route exact path={routes.POST_OPPS} component={() => <PostOppPage />} />
      <Route exact path={routes.VIEW_OPPS} component={() => <ViewOppsPage />} />
    </div>
  </Router>



export default withAuthentication(App);

