import React from 'react';

import AuthUserContext from './AuthUserContext';
import { PasswordForgetForm } from './PasswordForget';
import PasswordChangeForm from './PasswordChange';
import withAuthorization from './withAuthorization';

import OrgNavigation from './OrgNavigation';
import ImageUpload from './ImageUpload'
import * as firebase from 'firebase'
//import "./OrgAccount.css";



const OrgAccountPage = () =>
  <AuthUserContext.Consumer>
    {authUser =>
      <div className="accountInfo">>
        <OrgNavigation />
        <div className="centerInfoDiv">
        <h2 className="accounth2">Thanks for partnering with us!</h2>
        <h5 className="accounth5">View and edit your account information below.</h5>
        <p className="accountP">Email: {authUser.email}</p>
        <p>Organization: {authUser.displayName}</p>
       <p className="profileImg">Profile Photo:</p>
        <img src={firebase.auth().currentUser.photoURL || "//style.anu.edu.au/_anu/4/images/placeholders/person.png"} alt="Uploaded images" className="profImage" height="200" width="200" />
        <div>
        <h2>Add your Logo</h2>
        <ImageUpload />
        </div>
        <h4 className="accounth4">Forgot your password? No worries. Find it here.</h4>
        <PasswordForgetForm />
        <h4 className="accounth4">Need to change your password? Do that right here.</h4>
        <PasswordChangeForm />
      </div>
     </div> 
    }
  </AuthUserContext.Consumer>





const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(OrgAccountPage);