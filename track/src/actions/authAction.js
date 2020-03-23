import trackerApi from '../api/tracker';
import {AsyncStorage} from 'react-native';
import {ADD_ERROR,REGISTERING} from './Type';

export const SignUp = ({email,password}) => async dispatch => {
    try {
        const res = await trackerApi.post('/singup',{email,password});
        await AsyncStorage.setItem('token',res.data.token);
       dispatch({
           type: REGISTERING,
           payload:res.data.token
       })
       
    } catch (err) {
        console.log(err.message);
        dispatch({
            type: ADD_ERROR,
            payload:'Some thing wrong'
        })
    }
}

export const SignIn = () => async dispatch => {
    try {
        
    } catch (err) {
        
    }
}

export const SingOut = () => async dispatch => {
    try {
        
    } catch (err) {
        
    }
}