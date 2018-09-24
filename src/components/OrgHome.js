import React, { Component } from 'react';

import withAuthorization from './withAuthorization';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';
import OrgNavigation from './OrgNavigation';
import '../components/App.css';
import "./OrgHome.css";
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
      
        <h2 className="homeh2">Hello, {firebase.auth().currentUser.displayName}</h2>
        <img src={firebase.auth().currentUser.photoURL || "//style.anu.edu.au/_anu/4/images/placeholders/person.png"} alt="Uploaded images" className="profImage" height="200" width="200" />
        
        <div class="container">
                <Link to={routes.POST_OPPS} className="postOpps">Post an Opportunity</Link>
                <a>All Opportunities</a>
              <section>
                  <ul>
                    {this.state.opportunities.map((opportunity) => {

                      return (
                        <div className="container">
                        <div key={opportunity.id}>
                        <div className="row all">
                          <p className="col-md" id="opportunityName">{opportunity.opportunityName}</p>
                          <p className="myopps col-md-2">{opportunity.date}</p>
                          <p className="myopps col-md-2">{opportunity.address}</p>
                          <p className="myopps col-md-2">{opportunity.timeframe}</p>
                          <p className="myopps col-md-2">{opportunity.description}</p>
                          <p className="myopps col-md-2">{opportunity.category}</p>
                          <button className="btn btn-primary delete-btn col-md-2 deleteOppButton" onClick={() => this.removeOpportunity(opportunity.id)}>Delete</button>
                          </div>
                          </div>
                        </div>
                      );
                    })}
                  </ul>
              </section>
          </div>
        </div>
    );
  }
}



const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(OrgHomePage);
