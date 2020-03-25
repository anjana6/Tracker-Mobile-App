import {ADD_CURRENT_LOCATION} from '../actions/Type';

const initialState = {
    recording: false,
    location: [],
    currentLocation: null,
}

export default  (state=initialState,action) => {
    const {type,payload} = action
    switch(type) {
        case ADD_CURRENT_LOCATION:
            return {...state,currentLocation:payload};
        default:
            return state;
    }
}