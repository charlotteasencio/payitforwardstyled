import React, { Component } from 'react';
//import "./Collapsible.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class Collapsible4 extends Component {
    constructor(){
        super()
        this.state={
            collapsed: true,
            isOpen: false
        }
    }

    handleCollapsible = () => {
        this.setState({
            collapsed: !this.state.collapsed,
            isOpen: !this.state.isOpen
        })
    }

    render() {
        const collapseState = (this.state.collapsed) ? "collapse" : "collapse show"
        console.log(this.state)
        return (
            <div>
                <div id="headingFour" className="collapsibleContent" onClick={this.handleCollapsible} data-toggle={collapseState}  data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                { this.state.isOpen
                    ? <FontAwesomeIcon icon="chevron-circle-up" className="fa-med arrow"/>
                    : <FontAwesomeIcon icon="chevron-circle-down" className="fa-med arrow"/>
                }
                    <h5>Connect with Us</h5>
                </div>
                <div id="collapseFour" className={collapseState} aria-labelledby="headingFour" data-parent="#accordionExample">
                    <form action="https://formspree.io/charlotte.e.asencio@gmail.com" method="POST">
                        <div className="form-group">
                            <label htmlFor="name-input">Name</label>
                            <input className="form-control" id="name-input" type="text" name="name"></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email-input">Email</label>
                            <input className="form-control" id="email-input" type="email" name="_replyto"></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="comment-input">Message</label>
                            <textarea className="form-control" id="comment-input" rows="5" name="message"></textarea>
                        </div>
                        <input className="btn btn-default" id="add-user" type="submit" value="Send"></input>
                    </form>
                </div>
            </div> 
        )
    }

}
