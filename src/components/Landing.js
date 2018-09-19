import React, { Component } from 'react';

import withAuthorization from './withAuthorization';
import { db } from '../firebase';
import Navigation from './Navigation';
import "./Home.css";
import { Collapsible } from "./Collapsible.js";

class LandingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: null,
    };
    
  }

  componentDidMount() {
    db.onceGetUsers().then(snapshot =>
      this.setState({ users: snapshot.val() })
    );
  }

  render() {
    return (
    <div>
      <div className="parallax">
        <Navigation />
        <div className="cd-fixed-bg cd-fixed-bg--1 opener">
          <h2>Pay It Foward</h2>
          <h5>A place to find ways to pay it foward and give back.</h5>
        </div>
        <Collapsible />
      </div>
    </div>
    );
  }
}


// </div>const UserList = ({ users }) =>
//   <div>
//     <h2>List of Display Names of Users</h2>
//     <p>(Saved on Sign Up in Firebase Database)</p>

//     {Object.keys(users).map(key =>
//       <div key={key}>{users[key].displayName}</div>
//     )}
//   </div>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(LandingPage);

// import React from 'react';
// import withAuthorization from './withAuthorization';
// /////
// import AuthUserContext from './AuthUserContext';

// const HomePage = () =>
//   <div>
//     <h1>Home Page</h1>
//     <p>The Home Page is accessible by every signed in user.</p>

//     <AuthUserContext.Consumer>
//     {authUser =>
//       <div>
        
//         <h1>Hello {authUser.displayName}!</h1>
        
//       </div>
//     }
//   </AuthUserContext.Consumer>

//   </div>

// const authCondition = (authUser) => !!authUser;

// export default withAuthorization(authCondition)(HomePage);