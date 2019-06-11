import React, { Component } from "react";

import withAuthorization from "../withAuthorization";
import Navigation from "../Navigation/Navigation";
import { Link } from "react-router-dom";
import * as routes from "../../constants/routes";
import firebase from "firebase/app";
import Image from "react-graceful-image";
import { Footer } from "../Footer/Footer";
import "./Home.css";

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: null,
      opportunities: []
    };
  }

  componentDidMount() {
    var user = firebase.auth().currentUser;
    const oppsRef = firebase
      .database()
      .ref("/users/" + user.uid + "/myopportunities");
    oppsRef.on("value", snapshot => {
      let opportunities = snapshot.val();
      let newState = [];
      for (let opportunity in opportunities) {
        newState.push({
          id: opportunity,
          opportunityName: opportunities[opportunity].opportunityName,
          date: opportunities[opportunity].date,
          timeframe: opportunities[opportunity].timeframe,
          description: opportunities[opportunity].description,
          address: opportunities[opportunity].address,
          category: opportunities[opportunity].category,
          photoURL: opportunities[opportunity].photoURL,
        });
      }
      this.setState({
        opportunities: newState
      });
    });
  }

  removeOpportunity(opportunityId) {
    var user = firebase.auth().currentUser;
    const oppRef = firebase
      .database()
      .ref("/users/" + user.uid + "/myopportunities/" + opportunityId);
    oppRef.remove();
  }

  onerror() {
    document.querySelectorAll('img').forEach(function(img){
      img.onerror = function(){this.style.display="none";};
    })
  }

  render() {
    return (
      <div>
        <Navigation />

        <div className="userProfileHeader">
        <Link className="navlink" to={routes.ACCOUNT}><div className="userImageDiv">
          <img src={firebase.auth().currentUser.photoURL || "//style.anu.edu.au/_anu/4/images/placeholders/person.png"} alt="Uploaded images" className="profImage"/>
        </div>
        </Link>
        <Link to={routes.VIEW_OPPS}><button className="basicButtonBlue">Find Opportunities!</button></Link>
        </div>
                {this.state.opportunities.map(opportunity => {
                  return (
                      <div className="volOpp" key={opportunity.id}>
                        <div id="oppText">
                        <Image src={opportunity.photoURL} alt="Image" placeholderColor="#313131"/>
                          <p>{opportunity.opportunityName}</p>
                          <p>{opportunity.date}</p>
                          <p>{opportunity.address}</p>
                          <p>{opportunity.category}</p>
                        </div>
                        <i className="fas fa-times" id="removeX" onClick={() => this.removeOpportunity(opportunity.id)}></i>
                    </div>
                         );
                  })}
        <Footer />
      </div>
    );
  }
}


const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(HomePage);