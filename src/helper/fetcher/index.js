import axios from "axios";
import { handleTokenErrors } from '../errorhandling';

export const ERROR_NO_CONNECTION = ['Sorry there is problem. Pleas refresh again.'];
export const RESPONSE_SUCCESS = 'SUCCESS';
export const RESPONSE_ERROR = 'ERROR';
export const RESPONSE_ERROR_CONNECTION = { status: RESPONSE_ERROR, errors: ERROR_NO_CONNECTION };
export const BASE_URL = process.env.REACT_APP_BASE_URL;


axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


export const fetchAPI = ( { type, url,  params }) =>{
    let config;
    let set ={ method: type, url }
    switch (type) {
        case 'GET':
          config = { ...set, params }
        break;
        default:
          config = { ...set, data: params }
        break;
    }
    

    return axios(config).then(response => {
       if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response?response.data:null);
      } else {
          var error = new Error(response.statusText);
          error.response = response;
          throw error;
      }
  
  
      })
      .catch(error => {
          if (axios.isCancel(error)) {
            console.log("Request cancelled by user");
          } else {
            
            handleTokenErrors(error);
          }
      });
  
  }


  



