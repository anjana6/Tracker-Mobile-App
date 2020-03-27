import {FETCH_TRACKS} from './Type';
import trackerApi from '../api/tracker';

export const fetchTrack = () =>async dispatch =>{
    try {
        //console.log('fech');
        const res = await trackerApi.get('/tracks');
        //console.log(res.data);
    dispatch({
        type: FETCH_TRACKS,
        payload: res.data
    })
    } catch (err) {
        console.log(err.message);
        
    }
    

}

export const createTrack = (name,locations) => async dispatch => {
    
    try {
        await trackerApi.post('/tracks',{name,locations})
    } catch (err) {
        console.log(err.message);
        
    }
    
} 