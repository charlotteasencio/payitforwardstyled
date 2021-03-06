import React from 'react';
import Navigation from '../Navigation/Navigation';
import Lightbulb from "../images/lightbulb.png";
import Clipboard from "../images/clipboard.png";
import Person from "../images/person.png";
import { Collapsible } from "../Collapsible/Collapsible";
import { Footer } from "../Footer/Footer.js";
import { Collapsible2 } from "../Collapsible/Collapsible2";
import { Collapsible3 } from '../Collapsible/Collapsible3';
import { Collapsible4 } from '../Collapsible/Collapsible4';
import * as routes from "../../constants/routes";
import { Link } from "react-router-dom";
import "../Landing/Landing.css"

const LandingPage = () =>
  <div>
    <Navigation />
    <div className="landingTopSection">
      <h2>Welcome To Pay it Forward</h2>
      <h4>A place to connect volunteers with volunteer opportunties.</h4>
      <Link to={routes.VIEW_OPPS}><button id="getInvolvedButton" className="basicButtonPink">Get Involved!</button></Link>
    </div>
    <div className="middleSection">
    <div className="row">
    <div className="col-sm-4">
      <div className="middleLeftSection">
      <img className="middleSectionImage" alt="clipboard" src={Clipboard}></img>
        <h3>How it Works</h3>
        <p>Cupcake ipsum dolor sit amet chupa chups. Liquorice gummi bears halvah caramels liquorice. Pastry jujubes tiramisu cake cookie tiramisu gummies. Cake muffin 
          liquorice marshmallow oat cake sesame snaps sweet roll cookie liquorice. Candy canes powder macaroon biscuit pastry cake muffin soufflé. Gingerbread gingerbread 
          chocolate soufflé sweet roll icing chocolate ice cream sesame snaps.</p>
      </div>
    </div>
    <div className="col-sm-4">
      <div className="middleCenterSection">
        <img className="middleSectionImage" alt="person" src={Person}></img>
        <h3>Where We Connect</h3>
        <p>Cupcake ipsum dolor sit amet chupa chups. Liquorice gummi bears halvah caramels liquorice. Pastry jujubes tiramisu cake cookie tiramisu gummies. Cake muffin 
          liquorice marshmallow oat cake sesame snaps sweet roll cookie liquorice. Candy canes powder macaroon biscuit pastry cake muffin soufflé. Gingerbread gingerbread 
          chocolate soufflé sweet roll icing chocolate ice cream sesame snaps.</p>
      </div>
    </div>
    <div className="col-sm-4">
      <div className="middleRightSection">
        <img className="middleSectionImage" alt="lightbulb" src={Lightbulb}></img>
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

export default LandingPage;