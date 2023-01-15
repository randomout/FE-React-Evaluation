import { fakeSkills } from "../dummy-data";

export const SKILLS_LOADED = 'SKILLS_LOADED';

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