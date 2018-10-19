import React, { Component } from 'react';

import withAuthorization from './withAuthorization';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';
import OrgNavigation from './OrgNavigation';
//import '../components/App.css';
//import "./OrgHome.css";
import firebase from 'firebase/app';

class OrgHomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {

      organizations: null,
      opportunities: []
    };

  }

  componentDidMount() {
    var ref = firebase.database().ref("opportunities");
    var user = firebase.auth().currentUser;
    ref.orderByChild("postedBy").equalTo(user.uid).on("value", (snapshot) => {
      let opportunities = snapshot.val();
      let newState = [];
      for (let opportunity in opportunities) {
        newState.push({
          id: opportunity,
          opportunityName: opportunities[opportunity].opportunityName,
          timeframe: opportunities[opportunity].timeframe,
          date: opportunities[opportunity].date,
          description: opportunities[opportunity].description,
          address: opportunities[opportunity].address,
          category: opportunities[opportunity].category,
          numberOfVolunteers: opportunities[opportunity].numberOfVolunteers,
        });
      }
      console.log(snapshot.val());

      this.setState({
        opportunities: newState
      });
    });
  }

  removeOpportunity(opportunityId) {
    const oppRef = firebase.database().ref(`/opportunities/${opportunityId}`);
    oppRef.remove();
  }

  render() {
    return (
      <div>
        <OrgNavigation />
        <div className="headerBox">
        <h2 className="homeh2">Hello, {firebase.auth().currentUser.displayName}</h2>
        <img src={firebase.auth().currentUser.photoURL || "//style.anu.edu.au/_anu/4/images/placeholders/person.png"} alt="Uploaded images" className="profImage" height="200" width="200" />
        </div>
        <Link to={routes.POST_OPPS}><button>Post an Opportunity</button></Link>
        <h3>All Opportunities</h3>
                    {this.state.opportunities.map((opportunity) => {
                      return (
                        <div>
                        <div key={opportunity.id}>
                          <p>{opportunity.opportunityName}</p>
                          <p>{opportunity.date}</p>
                          <p>{opportunity.address}</p>
                          <p>{opportunity.timeframe}</p>
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



const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(OrgHomePage);
