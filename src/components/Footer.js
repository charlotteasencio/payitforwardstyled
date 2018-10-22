import React, { Component } from 'react';
//import "./Footer.css"


export class Footer extends Component {
    render() {
        return (
            <div className = "footer">
                <div className="topRow">
                <p><a href="mailto:webmaster@example.com">payitforward@gmail.com</a></p>
                <p>phone: 555-555-555</p>
                <p>Address: 320 E 9th St, Charlotte, NC 28202</p>
                </div>
                <div className="bottomRow">
                <p className="cp">&copy;2019</p>
                </div>
            </div>
        );
    }
};