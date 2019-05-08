import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from './SignOut';
import * as routes from '../constants/routes';
//import "./Navigation.css";
import Logo from './images/logo2.png';
import "../index.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class NavigationAuth extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            collapsed: true,
            isOpen: false
        }
    }

    handleOpen = () => {
        this.setState({
        collapsed: !this.state.collapsed,
        isOpen: !this.state.isOpen
        })
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
                <div id="menuButton" onClick={this.handleOpen} data-toggle={collapseState} data-target="#navLinks" aria-expanded="true" aria-controls="navLinks">
                    { this.state.isOpen
                    ? <FontAwesomeIcon icon="times" className="fa-lg menu"/>
                    : <FontAwesomeIcon icon="bars" className="fa-lg menu"/>
                    }
                </div>
                <div id="navLinks" className={collapseState} aria-labelledby="menuButton" data-parent="#accordionExample">
                <div className="styleNavLinks">
                    <Link className="navlink" to={routes.LANDING}>Home</Link>
                    <Link className="navlink" to={routes.HOME}>Profile</Link>
                    <Link className="navlink" to={routes.ACCOUNT}>Account</Link>
                    <SignOutButton />
                </div>
                </div>
            </div>
        </nav>
        <nav className="navbarNonAuthLargeScreen">
            <div className="logoDiv">
                <Link className="navlink" to={routes.LANDING}><img className="logo" alt="logo" src={Logo}></img></Link>
                <Link className="navlink" id="home" to={routes.LANDING}>PAY IT FORWARD</Link>
            </div>
            <div className="navRight">
                <div className="styleNavLinks">
                    <Link className="navlink" to={routes.LANDING}>Home</Link>
                    <Link className="navlink" to={routes.HOME}>Profile</Link>
                    <Link className="navlink" to={routes.ACCOUNT}>Account</Link>
                    <SignOutButton />
                </div>
            </div>
        </nav>
        </div>
        )
    }
}