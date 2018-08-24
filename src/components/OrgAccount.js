import React from 'react';

import AuthUserContext from './AuthUserContext';
import { PasswordForgetForm } from './PasswordForget';
import PasswordChangeForm from './PasswordChange';
import withAuthorization from './withAuthorization';

import OrgNavigation from './OrgNavigation';
import ImageUpload from './ImageUpload'
import * as firebase from 'firebase'



const OrgAccountPage = () =>
  <AuthUserContext.Consumer>
    {authUser =>
      <div>
        <OrgNavigation />
        <h1>Account: {authUser.email}</h1>
        <h1>Name: {authUser.displayName}</h1>
        <p>Profile Photo:</p>
        <img src={firebase.auth().currentUser.photoURL || "//style.anu.edu.au/_anu/4/images/placeholders/person.png"} alt="Uploaded images" height="200" width="200" />
        <PasswordForgetForm />
        <PasswordChangeForm />
        <div>
        <h2>Add your Logo</h2>
        <ImageUpload />
        </div>
      </div>
    }
  </AuthUserContext.Consumer>





const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(OrgAccountPage);