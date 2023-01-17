import { SERVER, LOGIN_SUCCESS, LOGIN_FAILURE } from "../constants";

// send login data to backend and redirect to main page when successful
export const login = (data, history) => async dispatch => {
  try {
    const response = await fetch(`${SERVER}/api/login`, { method: 'POST', body: JSON.stringify(data)});

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

// signal login success 
export const loginSuccess = (userName) => ({
  type: LOGIN_SUCCESS,
  payload: userName,
});

// signal login failure (not used currently)
export const loginFailure = (error) => ({
  type: LOGIN_FAILURE, 
  payload: error,
});
