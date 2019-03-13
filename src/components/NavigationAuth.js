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
        this.menuToggle = this.menuToggle.bind(this);
        this.handleDocumentClick = this.handleDocumentClick.bind(this)
    }

    componentDidMount() {
        document.addEventListener('click', this.handleDocumentClick, false)
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleDocumentClick, false)
    }

    handleDocumentClick(e) {
        if(!this.refs.root.contains(e.target) && this.state.isOpen === true) {
            this.setState({
                isOpen: false
            })
        }
    }

    menuToggle(e) {
        e.stopPropagation()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
let menuStatus = this.state.isOpen ? 'isopen' : '';

return (
<div>
   <nav className="navbarNonAuth">
       <div className="logoDiv">
           <Link className="navlink" to={routes.LANDING}><img className="logo" alt="logo" src={Logo}></img></Link>
           <Link className="navlink" id="home" to={routes.LANDING}>PAY IT FORWARD</Link>
       </div>
       <div className="navRight">
         <div className="menuButton" onClick={this.menuToggle}><i className="fas fa-bars"></i></div>
         <ul className={ menuStatus }>
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