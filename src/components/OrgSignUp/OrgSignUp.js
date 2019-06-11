import React, { Component } from 'react';
import {
    Link,
    withRouter,
} from 'react-router-dom';

import * as firebase from 'firebase'
import * as routes from '../../constants/routes';
import { auth, db } from '../../firebase';
import OrgNavigation from '../OrgNavigation/OrgNavigation'
//import ImageUpload from './ImageUpload'
import "./OrgSignUp.css";



const OrgSignUpPage = ({ history }) =>
    <div>
        <OrgNavigation />
        <div className="signUpSection">
            <div className="signUpHeader">
                <h2>Thanks for joining us!</h2>
                <h5>Sign up as an organization to start connecting with volunteers.</h5>
            </div>
            <div className = "orgSignUpForm"><OrgSignUpForm history={history} /></div>
        </div>
    </div>


const INITIAL_STATE = {
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
    displayName: '',
    website: ''

};

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});


class OrgSignUpForm extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
        this.onSubmit = this.onSubmit
        this.handleChange = this.handleChange;
    }



    onSubmit = (event) => {
        const {
            displayName,
            email,
            passwordOne,
            phoneNumber,
            missionStatement,
            website

        } = this.state;

        const {
            history,
        } = this.props;

        auth.doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {

                // Create a user in your own accessible Firebase Database too
                db.doCreateOrg(authUser.user.uid, displayName, email, phoneNumber, missionStatement, website)
                    .then(() => {
                        this.setState({ ...INITIAL_STATE });
                        history.push(routes.ORG_HOME);
                        firebase.auth().currentUser.updateProfile({ displayName: displayName })
                        window.location.reload();
                    })
                    // .then(() => {
                    //     firebase.auth().currentUser.updateProfile({ displayName: displayName })
                    //     window.location.reload();
                        
                    //  })
                    .catch(error => {
                        this.setState(byPropKey('error', error));
                    });


            })
            .catch(error => {
                this.setState(byPropKey('error', error));
            });



        event.preventDefault();

    }


    render() {
        const {
            displayName,
            email,
            passwordOne,
            passwordTwo,
            error,
            phoneNumber,
            missionStatement,
            website
        } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            displayName === '';

        return (
        <div>
            <form onSubmit={this.onSubmit} className="signUpForm">
                <input
                    value={displayName}
                    onChange={event => this.setState(byPropKey('displayName', event.target.value))}
                    type="text"
                    placeholder="Organization name"
                    className="orgSignUpInput"
                />
                <input
                    value={email}
                    onChange={event => this.setState(byPropKey('email', event.target.value))}
                    type="text"
                    placeholder="Email Address"
                    className="orgSignUpInput"
                />
                <input
                    value={phoneNumber}
                    onChange={event => this.setState(byPropKey('phoneNumber', event.target.value))}
                    type="tel"
                    placeholder="Phone Number"
                    className="orgSignUpInput"
                />
                <textarea
                    value={missionStatement}
                    onChange={event => this.setState(byPropKey('missionStatement', event.target.value))}
                    type="text"
                    rows="2"
                    placeholder="Mission Statement"
                    className="largerInput"
                />
                <input
                    value={website}
                    onChange={event => this.setState(byPropKey('website', event.target.value))}
                    type="text"
                    placeholder="Website"
                    className="orgSignUpInput"
                />
                <input
                    value={passwordOne}
                    onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
                    type="password"
                    placeholder="Password"
                    className="orgSignUpInput"
                />
                <input
                    value={passwordTwo}
                    onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
                    type="password"
                    placeholder="Confirm Password"
                    className="orgSignUpInput"
                />
                <button disabled={isInvalid} type="submit" className="basicButtonBlue">
                    Sign Up
                </button>
                {error && <p>{error.message}</p>}
            </form>
         </div>   
        );
    }
}

const OrgSignUpLink = () =>
    <div className="signUpLink">
        <p>Don't have an organization account?
    {' '}
        <Link to={routes.ORG_SIGN_UP}>Sign Up</Link></p>
    </div>



export default withRouter(OrgSignUpPage);

export {
    OrgSignUpForm,
    OrgSignUpLink,
};