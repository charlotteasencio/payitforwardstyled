import { db } from './firebase';

// User API

//create user in db
export const doCreateUser = (id, displayName, email, photoURL) =>
    db.ref(`users/${id}`).set({
        displayName,
        email,
        photoURL
    });



//create ORG in db
export const doCreateOrg = (id, displayName, email, phoneNumber, missionStatement, website) =>
    db.ref(`organizations/${id}`).set({
        displayName,
        email,
        phoneNumber,
        missionStatement,
        website
    });

export const postOpp = (id, opportunityName, date, numberOfVolunteers, timeframe, address, description, category, postedBy, photoURL) =>
    db.ref(`/opportunities`).push({
        opportunityName,
        date,
        numberOfVolunteers,
        timeframe,
        address,
        description,
        category,
        postedBy,
        photoURL
    });



//all users in db
export const onceGetUsers = () =>
    db.ref('users').once('value');

//all ORGS in db
export const onceGetOrgs = () =>
    db.ref('organizations').once('value');

export const onceGetOpps = () =>
    db.ref('opportunities').once('value');
