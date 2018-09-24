import React, { Component } from "react";

import withAuthorization from "./withAuthorization";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";
import * as routes from "../constants/routes";
import firebase from "firebase/app";

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
      .ref("/users/" + user.uid + "/myopportunities/" + `${opportunityId}`);
    oppRef.remove();
  }

  render() {
    return (
      <div>
        <Navigation />

        <div className="headerBox">
        <div className="row">
        <div className="col-sm-12">
        <h2 className="homeh2">Hello, <br></br> {firebase.auth().currentUser.displayName}</h2>
        <img src={firebase.auth().currentUser.photoURL || "//style.anu.edu.au/_anu/4/images/placeholders/person.png"} alt="Uploaded images" className="profImage" height="200" width="200" />
        </div>
        </div>
        </div>
        
        <div class="container">
              <Link to={routes.VIEW_OPPS} className="allOpps">All Opportunities</Link>
              <a>My Opportunities</a>
                  <section>
                        {this.state.opportunities.map(opportunity => {
                          return (
                            <div className="container">
                              <div key={opportunity.id}>
                              <div className="row">
                              <p className="myopps col-md-2">{opportunity.opportunityName}</p>
                              <p className="myopps col-md-2">{opportunity.date}</p>
                              <p className="myopps col-md-2">{opportunity.address}</p>
                              <p className="myopps col-md-2">{opportunity.description}</p>
                              <p className="myopps col-md-2">{opportunity.category}</p>

                              <button className="btn delete-btn"
                                onClick={() =>
                                  this.removeOpportunity(opportunity.id)}>Delete
                              </button>
                            </div>
                            </div>
                            </div> //closing row
                          );
                        })}
                  </section>
                </div>

            {/* <section className='display-my-opportunities'>
            <div className="wrapper">
              <ul>
                {this.state.opportunities.map((opportunity) => {
                  return (
                    <div key={opportunity.id}>
                      <h3>{opportunity.opportunityName}</h3>
                      <p>Date: {opportunity.date}</p>
                      <p>Address: {opportunity.address}</p>
                      <p>Description: {opportunity.description}</p>
                      <p>Category: {opportunity.category}</p>


                      <button onClick={() => this.removeOpportunity(opportunity.id)}>Delete</button>

                    </div>
                  )
                })}
              </ul>
            </div>
          </section> */}
          </div>
    );
  }
              }

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(HomePage);
