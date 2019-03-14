import React, { Component } from 'react';
//import React from 'react';
import withAuthorization from './withAuthorization';

//import "./ViewOpps.css";

import Navigation from './Navigation';
//import '../components/App.css';

import firebase from 'firebase/app';
import 'firebase/database'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';


class ViewOppsPage extends React.Component {
    
  constructor(props) {
    super(props);

    this.state = {
      opportunities: [],
     
    };
  }

  componentDidMount() {
      const oppsRef = firebase.database().ref('opportunities');
        oppsRef.on('value', (snapshot) => {
            let opportunities = snapshot.val();
            let newState = [];
            for (let opportunity in opportunities){
                newState.push({
                    id: opportunity,
                    opportunityName: opportunities[opportunity].opportunityName,
                    timeframe: opportunities[opportunity].timeframe,
                    date: opportunities[opportunity].date,
                    description: opportunities[opportunity].description,
                    address: opportunities[opportunity].address,
                    category: opportunities[opportunity].category,
                    numberOfVolunteers: opportunities[opportunity].numberOfVolunteers,
                    photoURL: opportunities[opportunity].photoURL,
                    uid: opportunities[opportunity].uid
                });
            }
            this.setState({
                opportunities: newState,
                
            });
        });
  
  };


    SignUpOpp(opportunityName, date, address, category, description, photoURL, uid) {
      var user = firebase.auth().currentUser;
        firebase.database().ref('users').child(user.uid + "/myopportunities")
        .push({
          opportunityName: `${opportunityName}`,
          date: `${date}`,
          address: `${address}`,
          category: `${category}`,
          description: `${description}`,
          photoURL: `${photoURL}`,   
          uid: `${uid}`,   
        })
        
        
      }
      
  render() {
    return (
      <div>
        <Navigation />
        <div className="userProfileHeader">
          <h2>Go ahead and find your way to give back!</h2>
          <h5>Just click the sign up button and get volunteering.</h5>
        </div>
         <section className='display-opportunites'>
          {this.state.opportunities.map((opportunity) => {
          return (
            <div className="container oppsContainer"> 
                  <div key={opportunity.id}>
                    <div className="row">
                      <div className="col-sm-12 text-center singleOppHeader"> 
                          <img src={opportunity.photoURL || "//style.anu.edu.au/_anu/4/images/placeholders/person.png"} />
                          <h5 className="opportunityName">{opportunity.opportunityName}</h5>
                      </div> 
                    </div>    
                        
                  </div>
                <div className="singleOppBody">
                  <div id="oppInfo">
                      <p className="opportunityInfo"><FontAwesomeIcon  className="icon" icon={faCalendarAlt} />{opportunity.date}</p>
                      <p className="opportunityInfo"><FontAwesomeIcon  className="icon" icon={faMapMarkerAlt} />{opportunity.address}</p>
                      <p className="opportunityInfo"><FontAwesomeIcon  className="icon" icon={faClock}/>{opportunity.timeframe}</p>
                      <p className="opportunityDescription">{opportunity.description}</p>
                  </div>
                  <div className="row">
                    <div className="col-sm-12 text-center">
                      <button className="basicButtonPink text-center" onClick={() => this.SignUpOpp(opportunity.opportunityName, opportunity.date, opportunity.description, opportunity.category, opportunity.address, opportunity.photoURL)}>Sign Up</button>
                    </div>
                  </div>
                </div>
              </div>
                )
              })}

      </section>

</div>  
    
      
    );
  }
}



const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(ViewOppsPage);

