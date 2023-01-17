import { fakeInterests } from "../data/dummy-data";

export const INTERESTS_LOADED = 'INTERESTS_LOADED';

// load all interests for provided username
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

// signal app that all interests were loaded
export const interestsLoaded = (interests) => ({
  type: INTERESTS_LOADED,
  payload: interests,
});
