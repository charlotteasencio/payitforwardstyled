import React from 'react';

import AuthUserContext from './AuthUserContext';
import { PasswordForgetForm } from './PasswordForget';
import PasswordChangeForm from './PasswordChange';
import withAuthorization from './withAuthorization';
import Navigation from './Navigation';
import { Footer } from "./Footer";
import ImageUpload from './ImageUpload'
import * as firebase from 'firebase'

const AccountPage = () =>

  <AuthUserContext.Consumer>
    {authUser =>
      <div>
        <Navigation />
          <div className="accountInfo">
          <div className="innerInfoDiv">
          <div className="centerInfoDiv">
            <h2>Thanks for partnering with us!</h2>
            <h5>View and edit your account information below.</h5>
              <p>Email: {authUser.email}</p>
              <p>User Name: {authUser.displayName}</p>
              <p>Profile Photo:</p>
              <img src={firebase.auth().currentUser.photoURL || "//style.anu.edu.au/_anu/4/images/placeholders/person.png"} alt="Uploaded images" className="profImage" height="200" width="200" />
            </div>
            <h2>Add your profile picture</h2>
            <ImageUpload  />
            <h4 className="accounth4">Forgot your password? No worries. Find it here.</h4>
            <PasswordForgetForm />
            <h4 className="accounth4">Need to change your password? Do that right here.</h4>
            <PasswordChangeForm />
        </div>
        </div>
        <Footer />
      </div>
    }
  </AuthUserContext.Consumer>
 

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(AccountPage);