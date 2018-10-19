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

  render() {
    return (
      <div>
        <Navigation />

        <div className="headerBox">
        <h2 className="homeh2">Hello, <br></br> {firebase.auth().currentUser.displayName}</h2>
        <img src={firebase.auth().currentUser.photoURL || "//style.anu.edu.au/_anu/4/images/placeholders/person.png"} alt="Uploaded images" className="profImage" height="200" width="200" />
        </div>
          <Link to={routes.VIEW_OPPS}><button>All Opportunities</button></Link>
            <h3>My Opportunities</h3>
                {this.state.opportunities.map(opportunity => {
                  return (
                    <div>
                      <div key={opportunity.id}>
                        <p>{opportunity.opportunityName}</p>
                        <p>{opportunity.date}</p>
                        <p>{opportunity.address}</p>
                        <p>{opportunity.description}</p>
                        <p>{opportunity.category}</p>
                        <button onClick={() => this.removeOpportunity(opportunity.id)}>Delete</button>
                      </div>
                    </div> 
                         );
                  })}
        </div>
    );
  }
}

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(HomePage);
