import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from './SignOut';
import * as routes from '../constants/routes';
//import "./Navigation.css";
import Logo from './images/logo2.png';
import "../index.css";
import { Transition } from 'react-transition-group';

export class NavigationAuth extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            collapsed: true
        }
    }

    handleOpen = () => {
        this.setState(
            {collapsed: !this.state.collapsed}
        )
    }

    render() {
        const collapseState = (this.state.collapsed) ? "collapse" : "collapse show"

        return (
        <div>
        <nav className="navbarNonAuth">
            <div className="logoDiv">
                <Link className="navlink" to={routes.LANDING}><img className="logo" alt="logo" src={Logo}></img></Link>
                <Link className="navlink" id="home" to={routes.LANDING}>PAY IT FORWARD</Link>
            </div>
            <div className="navRight">
                <div id="menuButton" onClick={this.handleOpen} data-toggle={collapseState} data-target="#navLinks" aria-expanded="true" aria-controls="navLinks"><i className="fas fa-bars fa-lg"></i></div>
                <div id="navLinks" className={collapseState} aria-labelledby="menuButton" data-parent="#accordionExample">
                <ul className="styleNavLinks">
                    <Link className="navlink" to={routes.LANDING}>Home</Link>
                    <Link className="navlink" to={routes.HOME}>Profile</Link>
                    <Link className="navlink" to={routes.ACCOUNT}>Account</Link>
                    <SignOutButton />
                </ul>
                </div>
            </div>
        </nav>
        </div>
        )
    }
}