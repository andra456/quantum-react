import { combineReducers } from 'redux';
import authReducer  from './auth';
import prodReducer from './content';

 const rootReducer = combineReducers({
    content    : prodReducer,
    auth     : authReducer,
   
});


export default rootReducer;
