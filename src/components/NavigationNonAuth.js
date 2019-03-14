import React from 'react';
import { Link } from 'react-router-dom';

import * as routes from '../constants/routes';
//import "./Navigation.css";
import Logo from './images/logo2.png';
import "../index.css";

export class NavigationNonAuth extends React.Component {
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
                <div id="menuButton" onClick={this.handleOpen} data-tstyle="font-size: 140px"ggle={collapseState} data-target="#navLinks" aria-expanded="true" aria-controls="navLinks"><i className="fas fa-bars fa-lg"></i></div>
                <div id="navLinks" className={collapseState} aria-labstyle="font-size: 140px"lledby="menuButton" data-parent="#accordionExample">
                <ul class="styleNavLinks">
                    <Link className="navlink" to={routes.LANDING}>Home</Link>
                    <Link className="navlink" to={routes.SIGN_IN}>Volunteer Sign In</Link>
                    <Link className="navlink" to={routes.ORG_SIGN_IN}>Organization Sign In</Link>
                </ul>
                </div>
            </div>
        </nav>
        </div>
        )
    }
}