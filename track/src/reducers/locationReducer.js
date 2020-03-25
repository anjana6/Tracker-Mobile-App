import {ADD_CURRENT_LOCATION,START_RECORDING,STOP_RECORDING,ADD_LOCATION,CHANGE_NAME} from '../actions/Type';

const initialState = {
    name: '', 
    recording: false,
    location: [],
    currentLocation: null,
}

export default  (state=initialState,action) => {
    const {type,payload} = action
    switch(type) {
        case ADD_CURRENT_LOCATION:
            return {...state,currentLocation:payload};
        case START_RECORDING:
            return {...state,recording:true};
        case STOP_RECORDING:
            return {...state,recording:false};
        case ADD_LOCATION:
            return {...state,location:[...state.location,payload]};
        case CHANGE_NAME:
            return {...state,name:payload};
        default:
            return state;
    }
}