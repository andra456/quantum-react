import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from '../types/authTypes';
import { snackbar } from '../../helper/snacbar'
import * as api from '../services/authServices';



export const signinUser = (payload) => {
    return (dispatch) => {
        // submit email/password to the server
        api.AuthServices(payload)
            .then(response => {
                dispatch({ 
                    type: AUTH_USER, 
                    payload: response });

                let token = response.token;
                localStorage.setItem('token', token);
                dispatch(saveToken({token : response.token }))
                window.location.reload();

            }).catch((err) => {
                snackbar('errors', 'We couldn’t find an account matching the email and password you entered. Please check your email and password and try again.')
                dispatch(authError('Failed login'));
            });
    };
};



// Action Save Token
export const saveToken = token => dispatch => {
    dispatch({type: 'SAVE_TOKEN', payload: token});
 };
 
//user
export const authError = (error) => {
    return {
        type: AUTH_ERROR,
        payload: error
    };
};

export const signoutUser = () => {
    localStorage.removeItem('token');
    window.location.reload();
    return { type: UNAUTH_USER };
};

