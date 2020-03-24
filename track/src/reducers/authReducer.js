import {ADD_ERROR, REGISTERING,LOGGING, CLEAR_ERROR_MESSAGE, LOGOUT,HAVE_TOKEN,NOT_TOKEN} from '../actions/Type';

const initialState = {
    isToken: true,
    token: null,
    errorMessage:''}

export default (state = initialState,action) =>{
    const {type,payload} = action;
    
    switch(type){
        case ADD_ERROR:
            return {...state,errorMessage:payload};
        case REGISTERING:
        case LOGGING:
            return {token:payload,errorMessage:''};
        case HAVE_TOKEN:
            return{token:payload,errorMessage:''};
        case NOT_TOKEN:
            return{...state,isToken:false};
        case LOGOUT:
            return{token:null,errorMessage:''}
        case CLEAR_ERROR_MESSAGE:
            return{...state,errorMessage:''}
        default:
            return state;
    }
}