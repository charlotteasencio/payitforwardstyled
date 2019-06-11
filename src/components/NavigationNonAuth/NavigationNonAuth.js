import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';
import Logo from '../images/logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './NavigationNonAuth.css'

export class NavigationNonAuth extends React.Component {
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
        <div className="fullNavbar">
        <nav className="navbarNonAuth">
            <div className="logoDiv">
                <Link className="navlink" to={routes.LANDING}><img className="logo" alt="logo" src={Logo}></img></Link>
                <Link className="navlink" id="home" to={routes.LANDING}>PAY IT FORWARD</Link>
            </div>
            <div className="navRight">
                <div id="menuButton" onClick={this.handleOpen} data-tstyle="font-size: 140px"ggle={collapseState} data-target="#navLinks" aria-expanded="true" aria-controls="navLinks">
                <div id="menuButton" onClick={this.handleOpen} data-toggle={collapseState} data-target="#navLinks" aria-expanded="true" aria-controls="navLinks">
                    { this.state.isOpen
                    ? <FontAwesomeIcon icon="times" className="fa-lg menu"/>
                    : <FontAwesomeIcon icon="bars" className="fa-lg menu"/>
                    }
                </div>
                </div>
                <div id="navLinks" className={collapseState} aria-labelledby="menuButton" data-parent="#accordionExample">
                <div className="styleNavLinks">
                    <Link className="navlink" to={routes.LANDING}>Home</Link>
                    <Link className="navlink" to={routes.SIGN_IN}>Volunteer Sign In</Link>
                    <Link className="navlink" to={routes.ORG_SIGN_IN}>Organization Sign In</Link>
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
                    <Link className="navlink" to={routes.SIGN_IN}>Volunteer Sign In</Link>
                    <Link className="navlink" to={routes.ORG_SIGN_IN}>Organization Sign In</Link>
                </div>
            </div>
        </nav>
        </div>
        )
    }
}