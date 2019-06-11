import React, { Component } from 'react';

import withAuthorization from '../withAuthorization';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';
import OrgNavigation from '../OrgNavigation/OrgNavigation';
import firebase from 'firebase/app';
//import '../components/App.css';
import "./OrgHome.css";


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
        <div className="userProfileHeader">
        <img src={firebase.auth().currentUser.photoURL || "//style.anu.edu.au/_anu/4/images/placeholders/person.png"} alt="Uploaded images" className="profImage" height="200" width="200" />
        <Link to={routes.POST_OPPS}><button className="basicButtonBlue">Post an Opportunity</button></Link>
        <h3 id="postedOppsTitle">All Posted Opportunities</h3>
        </div>


          {this.state.opportunities.map((opportunity) => {
            return (
              <div className="volOpp" key={opportunity.id}>
                  <div id="oppText">
                      <p>{opportunity.opportunityName}</p>
                      <p>{opportunity.date}</p>
                      <p>{opportunity.address}</p>
                      <p>{opportunity.timeframe}</p>
                      <p>{opportunity.description}</p>
                      <p>{opportunity.category}</p>
                    </div>
                    <i className="fas fa-times" id="removeX" onClick={() => this.removeOpportunity(opportunity.id)}></i>
              </div>
            );
          })}
      </div>
    );
  }
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(OrgHomePage);