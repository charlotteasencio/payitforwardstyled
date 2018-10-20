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
        )
    }

}
