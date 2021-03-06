import React, { Component } from 'react';
import OrgNavigation from '../OrgNavigation/OrgNavigation';
import {
    //Link,
    withRouter,
} from 'react-router-dom';
import * as firebase from 'firebase'
import * as routes from '../../constants/routes';
import { db } from '../../firebase';
import "./PostOpp.css";

const PostOppPage = ({ history }) =>
    <div>
        <OrgNavigation />
        <div className="centerDiv">
        <h2 className="postOppsh2">Need volunteers? We've got you covered.</h2>
        <h5 className="postOppsh5">Post your organization's opportunities below.</h5>
        <PostOppForm history={history} />
        </div>
    </div>


const INITIAL_STATE = {
    opportunityName: '',
    date: '',
    numberOfVolunteers: '',
    timeframe: '',
    address: '',
    description: '',
    category: 'default',
    postedBy: '',
    photoURL: '',
    uid: '',
    error: null,
};

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});


class PostOppForm extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
        this.onSubmit = this.onSubmit
        this.handleChange = this.handleChange;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onSubmit = (event) => {
        const {
            id,
            opportunityName,
            date,
            numberOfVolunteers,
            timeframe,
            address,
            description,
            category,
        } = this.state;

        const {
            history,
        } = this.props;
        var user = firebase.auth().currentUser;
        db.postOpp(id, opportunityName, date, numberOfVolunteers, timeframe, address, description, category, user.uid, user.photoURL)
            .then(() => {
                this.setState({ ...INITIAL_STATE });
                history.push(routes.ORG_HOME)
            })
            .catch(error => {
                this.setState(byPropKey('error', error))
            })

        event.preventDefault();

    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        const {
            opportunityName,
            date,
            numberOfVolunteers,
            timeframe,
            address,
            description,
            category,
            error
        } = this.state;

        const isInvalid =
            opportunityName === '' ||
            date === '' ||
            numberOfVolunteers === '' ||
            timeframe === '' ||
            address === '' ||
            description === '' ||
            category === 'default';

        return (
                <form id="postOppForm" onSubmit={this.onSubmit}>
                        <input
                            value={opportunityName}
                            onChange={event => this.setState(byPropKey('opportunityName', event.target.value))}
                            type="text"
                            placeholder="Opportunity name"
                            className="postOppsInput"
                        />          
                        <input
                            value={date}
                            onChange={event => this.setState(byPropKey('date', event.target.value))}
                            type="date"
                            placeholder="Date"
                            className="postOppsInput"
                        />     
                        <input
                            value={numberOfVolunteers}
                            onChange={event => this.setState(byPropKey('numberOfVolunteers', event.target.value))}
                            type="text"
                            placeholder="Number of volunteers"
                            className="postOppsInput"
                        />
                        <input
                            value={timeframe}
                            onChange={event => this.setState(byPropKey('timeframe', event.target.value))}
                            type="text"
                            placeholder="Time"
                            className="postOppsInput"
                        />
                        <input
                            value={address}
                            onChange={event => this.setState(byPropKey('address', event.target.value))}
                            type="text"
                            placeholder="Address"
                            className="postOppsInput"
                        />
                        <input
                            value={description}
                            onChange={event => this.setState(byPropKey('description', event.target.value))}
                            type="text"
                            placeholder="Event description"
                            className="postOppsInput"
                        /> 
                        <div>
                    Category:
                        <select value={category} className="postOppsSelect" onChange={ event => this.setState(byPropKey('category', event.target.value))}>
                            <option value="default">Please select one...</option>
                            <option value="Animals">Animals</option>
                            <option value="Children">Children</option>
                            <option value="Community">Community</option>
                            <option value="Computers and Technology">Computers and Technology</option>
                            <option value="Education">Education</option>
                            <option value="Medical">Medical</option>
                            <option value="Seniors">Seniors</option>
                            <option value="Teens">Teens</option>
                            <option value="Other">Other</option>
                        </select>  
                        </div>
                        <button disabled={isInvalid} type="submit" className="postOppButton">
                            Add Opportunity
                        </button>       

                    {error && <p>{error.message}</p>}
                </form>
        );
    }
}




export default withRouter(PostOppPage);

export {
    PostOppPage
};