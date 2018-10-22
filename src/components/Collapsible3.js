import React, { Component } from 'react';
//import "./Collapsible.css";


export class Collapsible3 extends Component {
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
                <div id="headingThree" className="collapsibleContent" onClick={this.handleCollapsible} data-toggle={collapseState} data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <i class="fas fa-chevron-circle-down"></i>
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
