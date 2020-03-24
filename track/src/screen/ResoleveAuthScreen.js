import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import {TryLocalSignIn} from '../actions/authAction';
import {Text} from 'react-native';

const ResoleveAuthScreen = ({TryLocalSignIn}) => {
    useEffect(() => {
       TryLocalSignIn();
    }, []);
    return <Text style={{margin:30}}>hii</Text>;
}



export default connect(null,{TryLocalSignIn})(ResoleveAuthScreen);
