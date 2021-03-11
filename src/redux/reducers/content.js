import * as actionType from '../types/userTypes';
const initialState = {
    list_user : [],
    edit_success : false,
    create_success : false,
    delete_success : false,
 };
 
 export default function(state = initialState, action) {
   
    switch (action.type) {
        case actionType.CONTENT_USER_LIST:
            return { ...state, 
                        list_user: action.payload, 
                        type : action.type}
        case actionType.CREATE_USERS:
            return { ...state, 
                        create_success: true, 
                        type : action.type}
        case actionType.DELETE_USER:
            return { ...state, 
                        delete_success: true, 
                        type : action.type }
        case actionType.EDIT_USER:
            return { ...state, 
                        edit_success: true, 
                        type : action.type }
        default:
            return state;
    }
    
};
