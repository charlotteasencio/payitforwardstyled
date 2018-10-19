import React from 'react';
import OrgNavigation from './OrgNavigation';
import { Collapsible } from "./Collapsible.js";
import { Footer } from "./Footer.js";
//import "./Landing.css"


const OrgLandingPage = () =>
<div>
  <OrgNavigation />
  <div className="parallax">
    <h2>Welcome To Pay it Forward</h2>
    <h4>A place to connect volunteers with volunteer opportunties.</h4>
    {/*<a className="btn btn-success btn-lg" href="#" role="button">Get Involved!</a>*/}
  </div>
  <Collapsible />
  <Footer />
</div>
export default OrgLandingPage;