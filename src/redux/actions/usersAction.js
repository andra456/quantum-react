import axios from 'axios';
import * as actionType from '../types/userTypes'
import * as api from '../services/userServices';

axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem("token");
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


export function loadContent(payload) {
 
   return dispatch => {
      return api.userServices(payload)
         .then(response => {
            dispatch({
               type: actionType.CONTENT_USER_LIST,
               payload: response
            });
            return Promise.resolve();
         })
         
   };
}

export function createUsers(payload) {
 
   return dispatch => {
      return api.userCreate(payload)
         .then(response => {
            dispatch({
               type: actionType.CREATE_USERS,
               payload: response
            });
            return Promise.resolve();
         })
         
   };
}

export function editUser(payload) {
 
   return dispatch => {
      return api.userEdit(payload)
         .then(response => {
            dispatch({
               type: actionType.EDIT_USER,
               payload: response
            });
            return Promise.resolve();
         })
         
   };
}

export function deleteUser(payload) {
 
   return dispatch => {
      return api.userDelete(payload)
         .then(response => {
            dispatch({
               type: actionType.DELETE_USER,
               payload: response
            });
            return Promise.resolve();
         })
         
   };
}





