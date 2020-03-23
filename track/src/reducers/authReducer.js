import {ADD_ERROR, REGISTERING,LOGGING} from '../actions/Type';

const initialState = {
    token: null,
    errorMessage:''}

export default (state = initialState,action) =>{
    const {type,payload} = action;
    
    switch(type){
        case ADD_ERROR:
            return {...state,errorMessage:payload};
        case REGISTERING:
        case LOGGING:
            return {...state,token:payload,errorMessage:''};
        default:
            return state;
    }
}