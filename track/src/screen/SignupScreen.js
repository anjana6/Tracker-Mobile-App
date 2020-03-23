import React from 'react';
import {connect} from 'react-redux';
import {View,StyleSheet} from 'react-native';
import {SignUp} from '../actions/authAction';
import AuthForm from '../component/AuthForm';
import NavLink from '../component/NavLink';

const SignupScreen = ({SignUp,auth:{errorMessage}}) =>{

    return (
        <View style={styles.container}>
            <AuthForm
                headerText="Sign Up for Tracker"
                errorMessage={errorMessage}
                submitButtonText="Sign Up"
                onSubmit={SignUp}
            />
            <NavLink
                routeName = "Signin"
                text = "Already have an account? Sign in insted"
            />
        </View>
    )
}

const styles = StyleSheet.create({ 
    container:{
        flex:1,
        justifyContent:'center',
        marginBottom:250
    },
    
});

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps,{SignUp})(SignupScreen);
