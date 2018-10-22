import React from 'react';
import OrgNavigation from './OrgNavigation';
import { Collapsible } from "./Collapsible.js";
import { Footer } from "./Footer.js";
import { Collapsible2 } from './Collapsible2';
import { Collapsible3 } from './Collapsible3';
import { Collapsible4 } from './Collapsible4';
//import "./Landing.css"


const OrgLandingPage = () =>
<div>
  <OrgNavigation />
  <div className="parallax">
    <h2>Welcome To Pay it Forward</h2>
    <h4>A place to connect volunteers with volunteer opportunties.</h4>
    {/*<a className="btn btn-success btn-lg" href="#" role="button">Get Involved!</a>*/}
  </div>
  <div className="collapsibleSection">
  <Collapsible />
  <Collapsible2 />
  <Collapsible3 />
  <Collapsible4 />
  </div>
  <Footer />
</div>
export default OrgLandingPage;