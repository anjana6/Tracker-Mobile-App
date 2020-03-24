import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import {TryLocalSignIn} from '../actions/authAction';
import {Text} from 'react-native';

const ResoleveAuthScreen = ({TryLocalSignIn}) => {
    useEffect(() => {
       TryLocalSignIn();
    }, []);
    return null;
}



export default connect(null,{TryLocalSignIn})(ResoleveAuthScreen);
