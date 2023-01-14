import { LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions";

export default function user(state = initialUserState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS: 
            return {
                ...state,
                userName: action.payload.userName,
            }
        case LOGIN_FAILURE: 
            return {
                ...state,
                userName: '',
                error: action.payload.error
            }
        default:
            return state;
    }
}

const initialUserState = {
    userName: '',
    error: null,
};
