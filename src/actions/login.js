export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

// send login data to backend and redirect to main page when successful
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
