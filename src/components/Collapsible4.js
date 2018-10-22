import React, { Component } from 'react';
//import "./Collapsible.css";


export class Collapsible4 extends Component {
    constructor(){
        super()
        this.state={
            collapsed: true
        }
    }

    handleCollapsible = () => {
        this.setState(
            {collapsed: !this.state.collapsed}
        )
    }


    render() {
        const collapseState = (this.state.collapsed) ? "collapse" : "collapse show"
        console.log(this.state)
        return (
            <div>
                <div id="headingFour" className="collapsibleContent" onClick={this.handleCollapsible} data-toggle={collapseState}  data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <i class="fas fa-chevron-circle-down"></i>
                    <h5>Connect with Us</h5>
                </div>
                <div id="collapseFour" className={collapseState} aria-labelledby="headingFour" data-parent="#accordionExample">
                    <form action="https://formspree.io/charlotte.e.asencio@gmail.com" method="POST">
                        <div class="form-group">
                            <label for="name-input">Name</label>
                            <input class="form-control" id="name-input" type="text" name="name"></input>
                        </div>
                        <div class="form-group">
                            <label for="email-input">Email</label>
                            <input class="form-control" id="email-input" type="email" name="_replyto"></input>
                        </div>
                        <div class="form-group">
                            <label for="comment-input">Message</label>
                            <textarea class="form-control" id="comment-input" rows="5" name="message"></textarea>
                        </div>
                        <input class="btn btn-default" id="add-user" type="submit" value="Send"></input>
                    </form>
                </div>
            </div> 
        )
    }

}
