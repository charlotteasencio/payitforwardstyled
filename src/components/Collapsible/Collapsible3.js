import React, { Component } from 'react';
//import "./Collapsible.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class Collapsible3 extends Component {
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
                <div id="headingThree" className="collapsibleContent" onClick={this.handleCollapsible} data-toggle={collapseState} data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                { this.state.isOpen
                    ? <FontAwesomeIcon icon="chevron-circle-up" className="fa-med arrow"/>
                    : <FontAwesomeIcon icon="chevron-circle-down" className="fa-med arrow"/>
                }
                    <h5>Frequently Asked Questions</h5>
                </div>
                <div id="collapseThree" className={collapseState} aria-labelledby="headingThree" data-parent="#accordionExample">
                    <p className="question">Q: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin libero lacus, finibus ac leo eget, scelerisque vehicula urna. Vivamus a velit sed diam tristique tincidunt non non ligula. Pellentesque varius erat non ex eleifend sagittis. Pellentesque lacinia dolor in faucibus iaculis.</p>
                    <p className="answer">A: Nullam eu metus leo. Donec metus magna, vulputate vitae sodales vulputate, tincidunt at turpis. Sed maximus suscipit urna eget viverra. Sed vitae consequat velit. Ut vestibulum odio sagittis ipsum venenatis consectetur. Donec sed tempus est.</p>
                    <p className="question">Q: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin libero lacus, finibus ac leo eget, scelerisque vehicula urna. Vivamus a velit sed diam tristique tincidunt non non ligula. Pellentesque varius erat non ex eleifend sagittis. Pellentesque lacinia dolor in faucibus iaculis.</p>
                    <p className="answer">A: Nullam eu metus leo. Donec metus magna, vulputate vitae sodales vulputate, tincidunt at turpis. Sed maximus suscipit urna eget viverra. Sed vitae consequat velit. Ut vestibulum odio sagittis ipsum venenatis consectetur. Donec sed tempus est.</p>
                </div>
            </div>
        
        )
    }

}
