import { fakeInterests, fakeSkills } from "../dummy-data";

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const INTERESTS_LOADED = 'INTERESTS_LOADED';
export const SKILLS_LOADED = 'SKILLS_LOADED';


export const login = (data, history) => async dispatch => {
  try {
    const response = await fetch('http://localhost:3000/api/login', { method: 'POST', body: JSON.stringify(data)});

    console.log(response);

    // ignoring the response, but we'd do a loginSuccess/loginFailure call depending on 
    // the response here...

    dispatch(loginSuccess(data.username));

    history.push('/');
  } catch( error ) {
    // we'd do something like...
    // loginFailure(error);
  }
};

export const loginSuccess = (userName) => ({
  type: LOGIN_SUCCESS,
  payload: userName,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE, 
  payload: error,
});

export const loadInterests = (userName) => async dispatch => {
  try {
    const response = await fetch(`http://localhost:3000/api/interests&userName=${userName}`);

    console.log(response);

    // ignoring the response, but we'd do success/failure check usually...

    dispatch(interestsLoaded(fakeInterests));
  } catch( error ) {
    // we'd do something like...
    // loadFailure(error);
  }
}

export const interestsLoaded = (interests) => ({
  type: INTERESTS_LOADED,
  payload: interests,
});

export const loadSkills = (userName) => async dispatch => {
  try {
    const response = await fetch(`http://localhost:3000/api/skills&userName=${userName}`);

    console.log(response);

    // ignoring the response, but we'd do success/failure check usually...

    dispatch(skillsLoaded(fakeSkills));
  } catch( error ) {
    // we'd do something like...
    // loadFailure(error);
  }
}

export const skillsLoaded = (skills) => ({
  type: SKILLS_LOADED,
  payload: skills,
});