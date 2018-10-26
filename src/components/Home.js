import React, { Component } from "react";

import withAuthorization from "./withAuthorization";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";
import * as routes from "../constants/routes";
import firebase from "firebase/app";

//import "./Home.css";

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
      .ref("/users/" + user.uid + "/myopportunities/" + `${opportunityId}`);
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
        <h3 className="homeh2">Hello, {firebase.auth().currentUser.displayName}</h3>
        <div id="profImageDiv"><img src={firebase.auth().currentUser.photoURL || "//style.anu.edu.au/_anu/4/images/placeholders/person.png"} alt="Uploaded images" className="profImage"/></div>
        <Link to={routes.VIEW_OPPS}><button className="basicButtonYellow">Find Opportunities!</button></Link>
        </div>
          <div className="blueBackground">
                {this.state.opportunities.map(opportunity => {
                  return (
                    <div className="volOppsSection">
                      <div className="volOpp" key={opportunity.id}>
                      <div className="row">
                      <div className="col-sm-2">
                        <img src={opportunity.photoURL || this.onerror()}/>
                      </div>
                      <div className="col-sm-2">
                        <p>{opportunity.opportunityName}</p>
                      </div>
                      <div className="col-sm-2">
                        <p>{opportunity.date}</p>
                      </div>
                      <div className="col-sm-2">
                        <p>{opportunity.address}</p>
                      </div>
                      <div className="col-sm-2">
                        <p>{opportunity.category}</p>
                      </div>
                      <div className="col-sm-2">
                        <button className="basicButtonPink" onClick={() => this.removeOpportunity(opportunity.id)}>Delete</button>
                      </div>
                      </div>
                    </div>
                  </div>
                         );
                  })}
        </div>
      </div>
    );
  }
}


const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(HomePage);
