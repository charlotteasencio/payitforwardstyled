import React from 'react';
import OrgNavigation from './OrgNavigation';
import { Collapsible } from "./Collapsible.js";
import { Footer } from "./Footer.js";
import { Collapsible2 } from './Collapsible2';
import { Collapsible3 } from './Collapsible3';
import { Collapsible4 } from './Collapsible4';
import Lightbulb from "./images/lightbulb.png"
import Clipboard from "./images/clipboard.png"
import Person from "./images/person.png"


const OrgLandingPage = () =>
<div>
  <OrgNavigation />
  <div className="landingTopSection">
  <h2>Welcome To Pay it Forward</h2>
  <h4>A place to connect volunteers with volunteer opportunties.</h4>
  {/*<a className="btn btn-success btn-lg" href="#" role="button">Get Involved!</a>*/}
</div>
<div className="middleSection">
<div className="row">
<div className="col-sm-4">
  <div className="middleLeftSection">
  <img className="middleSectionImage" src={Clipboard}></img>
    <h3>How it Works</h3>
    <p>Cupcake ipsum dolor sit amet chupa chups. Liquorice gummi bears halvah caramels liquorice. Pastry jujubes tiramisu cake cookie tiramisu gummies. Cake muffin 
      liquorice marshmallow oat cake sesame snaps sweet roll cookie liquorice. Candy canes powder macaroon biscuit pastry cake muffin soufflé. Gingerbread gingerbread 
      chocolate soufflé sweet roll icing chocolate ice cream sesame snaps.</p>
  </div>
</div>
<div className="col-sm-4">
  <div className="middleCenterSection">
    <img className="middleSectionImage" src={Person}></img>
    <h3>Where We Connect</h3>
    <p>Cupcake ipsum dolor sit amet chupa chups. Liquorice gummi bears halvah caramels liquorice. Pastry jujubes tiramisu cake cookie tiramisu gummies. Cake muffin 
      liquorice marshmallow oat cake sesame snaps sweet roll cookie liquorice. Candy canes powder macaroon biscuit pastry cake muffin soufflé. Gingerbread gingerbread 
      chocolate soufflé sweet roll icing chocolate ice cream sesame snaps.</p>
  </div>
</div>
<div className="col-sm-4">
  <div className="middleRightSection">
    <img className="middleSectionImage" src={Lightbulb}></img>
    <h3>Why Pay it Forward</h3>
    <p>Cupcake ipsum dolor sit amet chupa chups. Liquorice gummi bears halvah caramels liquorice. Pastry jujubes tiramisu cake cookie tiramisu gummies. Cake muffin 
      liquorice marshmallow oat cake sesame snaps sweet roll cookie liquorice. Candy canes powder macaroon biscuit pastry cake muffin soufflé. Gingerbread gingerbread 
      chocolate soufflé sweet roll icing chocolate ice cream sesame snaps.</p>
  </div>
</div>
</div>
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