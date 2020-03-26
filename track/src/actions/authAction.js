import trackerApi from '../api/tracker';
import {AsyncStorage} from 'react-native';
import {ADD_ERROR,REGISTERING,LOGGING,CLEAR_ERROR_MESSAGE,LOGOUT,HAVE_TOKEN,NOT_TOKEN} from './Type';

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
        });
    }
}

export const SignIn = ({email,password}) => async dispatch => {
    try {
        const res = await trackerApi.post('/singin',{email,password});
        await AsyncStorage.setItem('token',res.data.token);
        dispatch({
           type: LOGGING,
           payload:res.data.token
       })
    } catch (err) {
        console.log(err.message);
        dispatch({
            type: ADD_ERROR,
            payload:'Some thing wrong'
        });
    }
}

export const TryLocalSignIn = () => async dispatch =>{
    const token = await AsyncStorage.getItem('token');
    if(token){
        dispatch({
            type:  HAVE_TOKEN,
            payload:token
        })
    }else{
        dispatch({
            type:NOT_TOKEN,
        })
    }
}

export const SingOut = () => async dispatch => {
    
        await AsyncStorage.removeItem('token');
        dispatch({
            type:LOGOUT
        })
    
}

export const ClearErrorMessage = () => dispatch =>{
    console.log("cle");
    dispatch({
        type:CLEAR_ERROR_MESSAGE
    })
}