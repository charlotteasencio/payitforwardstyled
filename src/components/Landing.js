import React from 'react';
import Navigation from './Navigation';
//import './Landing.css'
import { Collapsible } from "./Collapsible";
import { Footer } from "./Footer.js";
import { Collapsible2 } from "./Collapsible2";
import { Collapsible3 } from './Collapsible3';
import { Collapsible4 } from './Collapsible4';

const LandingPage = () =>
  <div>
    <Navigation />
    <div className="parallax">
      <h2>Welcome To Pay it Forward</h2>
      <h4>A place to connect volunteers with volunteer opportunties.</h4>
      {/*<a className="btn btn-success btn-lg" href="#" role="button">Get Involved!</a>*/}
    </div>
    <Collapsible />
    <Collapsible2 />
    <Collapsible3 />
    <Collapsible4 />
    <Footer />
  </div>

export default LandingPage;