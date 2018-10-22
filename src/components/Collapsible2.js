import React, { Component } from 'react';
//import "./Collapsible.css";


export class Collapsible2 extends Component {
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
                <div id="headingTwo" className="collapsibleContent" onClick={this.handleCollapsible} data-toggle={collapseState}  data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <i class="fas fa-chevron-circle-down"></i>
                    <h5>The Mission</h5>
                </div>
                <div id="collapseTwo" className={collapseState} aria-labelledby="headingTwo" data-parent="#accordionExample">
                    <p>Our mission is simple: We want to provide a simple way for people to share volunteer opportunities that they know about and to find new ones that interest them.</p>
                </div>
            </div>
            

        )
    }

}
