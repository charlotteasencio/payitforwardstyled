import React from 'react';
import { Link } from 'react-router-dom';

import AuthUserContext from './AuthUserContext';
import SignOutButton from './SignOut';
import * as routes from '../constants/routes';
//import "./Navigation.css";
import Logo from './images/logo2.png';
import "../index.css";

export class NavigationAuth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    handleOpen = () => {
        this.setState(
            {isOpen: !this.state.isOpen}
        )
        console.log(this.state)
    }

    // componentDidMount() {
    //     document.addEventListener('click', this.handleDocumentClick, false)
    // }

    // componentWillUnmount() {
    //     document.removeEventListener('click', this.handleDocumentClick, false)
    // }

    // handleDocumentClick() {
    //     this.setState({
    //         isOpen: false
    //     })
    //     console.log('test')
    // }

    // menuToggle(e) {
    //     e.stopPropagation()
    //     this.setState({
    //         isOpen: !this.state.isOpen
    //     })
    // }

    render() {
        //const collapseState = (this.state.collapsed) ? "collapse" : "collapse show"
        let menuState = (this.state.isOpen) ? 'isopen' : 'isclosed';

        return (
        <div>
        <nav className="navbarNonAuth">
            <div className="logoDiv">
                <Link className="navlink" to={routes.LANDING}><img className="logo" alt="logo" src={Logo}></img></Link>
                <Link className="navlink" id="home" to={routes.LANDING}>PAY IT FORWARD</Link>
            </div>
            <div className="navRight">
                <div className="menuButton" onClick={this.handleOpen} data-toggle={menuState} ><i className="fas fa-bars"></i></div>
                <ul className={menuState}>
                    <Link className="navlink" to={routes.LANDING}>Home</Link>
                    <Link className="navlink" to={routes.HOME}>Profile</Link>
                    <Link className="navlink" to={routes.ACCOUNT}>Account</Link>
                    <div className="signOut"><SignOutButton /></div>
                </ul>
            </div>
        </nav>
        </div>
        )
    }
}