import { LOGIN_SUCCESS, LOGIN_FAILURE, INTERESTS_LOADED, SKILLS_LOADED } from "../actions";

export default function user(state = initialUserState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS: 
            return {
                ...state,
                userName: action.payload,
            }
        case LOGIN_FAILURE: 
            return {
                ...state,
                userName: '',
                error: action.payload
            }
        case INTERESTS_LOADED: 
            return {
                ...state, 
                interests: action.payload,
            }

        case SKILLS_LOADED: 
            return {
                ...state, 
                skills: action.payload,
            }
        default:
            return state;
    }
}

const initialUserState = {
    userName: '',
    error: null,
};
