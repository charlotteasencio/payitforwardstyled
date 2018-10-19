import React, { Component } from 'react';
//import "./Collapsible.css";


export class Collapsible extends Component {
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
                <div>
                    <div id="headingOne">
                        <h5>
                            <button onClick={this.handleCollapsible} type="button" data-toggle={collapseState} data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"><i class="fas fa-chevron-circle-down"></i>
                              About Us
                            </button>
                        </h5>
                    </div>

                    <div id="collapseOne" className={collapseState} aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div>
                        We are an organization created to help connect volunteers with volunteer opportunities. We want to be a simple way for volunteers and organizations to connect. With our app, you are able to both post, find, and sign up for opportunities that interest you. Connection to our communities and to each other is important and we strive to provide a simple way to facilitate that connection. 
                        </div>
                    </div>
                </div>
                <div>
                    <div id="headingTwo">
                        <h5>
                            <button onClick={this.handleCollapsible} type="button" data-toggle={collapseState}  data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"><i class="fas fa-chevron-circle-down"></i>
                                The Mission
                            </button>
                        </h5>
                    </div>
                    <div id="collapseTwo" className={collapseState} aria-labelledby="headingTwo" data-parent="#accordionExample">
                        Our mission is simple: We want to provide a simple way for people to share volunteer opportunities that they know about and to find new ones that interest them.
                    </div>
                </div>
                <div>
                    <div id="headingThree">
                        <h5>
                            <button onClick={this.handleCollapsible} type="button" data-toggle={collapseState} data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"><i class="fas fa-chevron-circle-down"></i>
                                Frequently Asked Questions
                            </button>
                        </h5>
                    </div>
                    <div id="collapseThree" className={collapseState} aria-labelledby="headingThree" data-parent="#accordionExample">
                        <div className="card-body">


Q: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin libero lacus, finibus ac leo eget, scelerisque vehicula urna. Vivamus a velit sed diam tristique tincidunt non non ligula. Pellentesque varius erat non ex eleifend sagittis. Pellentesque lacinia dolor in faucibus iaculis.

A: Nullam eu metus leo. Donec metus magna, vulputate vitae sodales vulputate, tincidunt at turpis. Sed maximus suscipit urna eget viverra. Sed vitae consequat velit. Ut vestibulum odio sagittis ipsum venenatis consectetur. Donec sed tempus est.

Q: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin libero lacus, finibus ac leo eget, scelerisque vehicula urna. Vivamus a velit sed diam tristique tincidunt non non ligula. Pellentesque varius erat non ex eleifend sagittis. Pellentesque lacinia dolor in faucibus iaculis.

A: Nullam eu metus leo. Donec metus magna, vulputate vitae sodales vulputate, tincidunt at turpis. Sed maximus suscipit urna eget viverra. Sed vitae consequat velit. Ut vestibulum odio sagittis ipsum venenatis consectetur. Donec sed tempus est.

                        </div>
                    </div>
                </div>
                <div>
                    <div id="headingFour">
                        <h5>
                            <button onClick={this.handleCollapsible} type="button" data-toggle={collapseState}  data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"><i class="fas fa-chevron-circle-down"></i>
                                Connect with Us
                            </button>
                        </h5>
                    </div>
                    <div id="collapseFour" className={collapseState} aria-labelledby="headingFour" data-parent="#accordionExample">
                        <div>
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
                </div>
            </div> 
        )
    }

}
