import React, { Component } from 'react';
//import "./Collapsible.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class Collapsible2 extends Component {
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
                <div id="headingTwo" className="collapsibleContent" onClick={this.handleCollapsible} data-toggle={collapseState}  data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                { this.state.isOpen
                    ? <FontAwesomeIcon icon="chevron-circle-up" className="fa-med arrow"/>
                    : <FontAwesomeIcon icon="chevron-circle-down" className="fa-med arrow"/>
                }
                    <h5>The Mission</h5>
                </div>
                <div id="collapseTwo" className={collapseState} aria-labelledby="headingTwo" data-parent="#accordionExample">
                    <p>Our mission is simple: We want to provide a simple way for people to share volunteer opportunities that they know about and to find new ones that interest them.</p>
                </div>
            </div>
            

        )
    }

}
