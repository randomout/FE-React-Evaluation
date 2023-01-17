import { fakeSkills } from "../data/dummy-data";

import { SERVER, SKILLS_LOADED } from "../constants";

// load all skills for provided username
export const loadSkills = (userName) => async dispatch => {
  try {
    const response = await fetch(`${SERVER}/api/skills&userName=${userName}`);

    console.log(response);

    // ignoring the response, but we'd do success/failure check usually...

    dispatch(skillsLoaded(fakeSkills));
  } catch( error ) {
    // we'd do something like...
    // loadFailure(error);
  }
}

// signal app when skills are loaded
export const skillsLoaded = (skills) => ({
  type: SKILLS_LOADED,
  payload: skills,
});