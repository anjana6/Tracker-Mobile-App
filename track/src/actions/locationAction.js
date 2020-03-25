import {ADD_CURRENT_LOCATION,START_RECORDING,STOP_RECORDING,ADD_LOCATION,CHANGE_NAME} from './Type';

export const startRecording = () => dispatch =>{
    dispatch({
        type:START_RECORDING
    })
};

export const stopRecording = () => dispatch =>{
    dispatch({
        type:STOP_RECORDING
    })
};

export const addLocation = (location,recording) => dispatch => {
    //console.log(recording);
    dispatch({
        type: ADD_CURRENT_LOCATION,
        payload: location
    });
    if(recording){
        dispatch({type: ADD_LOCATION, payload:location})
    }
}

export const changeName = (name) => dispatch => {
    dispatch({
        type: CHANGE_NAME,
        payload:name
    })
}