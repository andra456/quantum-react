import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from '../types/authTypes';

const initialState = {
    error: '', 
    authenticated: true,
    token:''
 };
 
 export default function(state = initialState, action) {
 
    switch (action.type) {
        case AUTH_USER:
            return { ...state, error: '', authenticated: true }
        case UNAUTH_USER:
            return { ...state, authenticated: false }
        case AUTH_ERROR:
            
            return { ...state, authenticated: false, error: action.payload }
        default:
            return state;
    }
};
