import {ADD_ERROR, REGISTERING} from '../actions/Type';

const initialState = {
    token: false,
    errorMessage:''}

export default (state = initialState,action) =>{
    const {type,payload} = action;
    
    switch(type){
        case ADD_ERROR:
            return {...state,errorMessage:payload};
        case REGISTERING:
            return {...state,token:payload,errorMessage:''};
        default:
            return state;
    }
}