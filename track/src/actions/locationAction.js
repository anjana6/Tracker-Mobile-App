import {ADD_CURRENT_LOCATION} from './Type';

export const startRecording = () => dispatch =>{

};

export const stopRecording = () => dispatch =>{

};

export const addLocation = (location) => dispatch => {
    dispatch({
        type: ADD_CURRENT_LOCATION,
        payload: location
    })
}