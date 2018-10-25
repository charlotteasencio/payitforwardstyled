import React, { Component } from "react";

import withAuthorization from "./withAuthorization";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";
import * as routes from "../constants/routes";
import firebase from "firebase/app";
import { Carousel } from 'react-responsive-carousel';

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

  render() {
    return (
      <div>
        <Navigation />

        <div className="userProfileHeader">
        <h3 className="homeh2">Hello,{firebase.auth().currentUser.displayName}</h3>
        <img src={firebase.auth().currentUser.photoURL || "//style.anu.edu.au/_anu/4/images/placeholders/person.png"} alt="Uploaded images" className="profImage" height="200" width="200" />
        <Link to={routes.VIEW_OPPS}><button className="basicButtonYellow">Find Opportunities!</button></Link>
        </div>
          <div className="volOppsSection">
          <div className="volOppsHeader">
            <h3>Where You're Volunteering</h3>
          </div>
                {this.state.opportunities.map(opportunity => {
                  return (
                      <div className="volOpp" key={opportunity.id}>
                        <img src={opportunity.photoURL || "//style.anu.edu.au/_anu/4/images/placeholders/person.png"} className="profileImg" height="100" width="100" />
                        <p>{opportunity.opportunityName}</p>
                        <p>{opportunity.date}</p>
                        <p>{opportunity.address}</p>
                        <p>{opportunity.category}</p>
                        <button className="basicButtonPink" onClick={() => this.removeOpportunity(opportunity.id)}>Delete</button>
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
