import {} from './Type';
import trackerApi from '../api/tracker';

export const fetchTrack = () => dispatch =>{

}

export const createTrack = (name,locations) => async dispatch => {
    //console.log("hii");
    console.log(name,locations.length);
    try {
        await trackerApi.post('/tracks',{name,locations})
    } catch (err) {
        console.log(err.message);
        
    }
    
} 