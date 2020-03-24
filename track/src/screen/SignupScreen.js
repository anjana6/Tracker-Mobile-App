import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import {View,StyleSheet} from 'react-native';
import {SignUp,TryLocalSignIn,ClearErrorMessage} from '../actions/authAction';
import AuthForm from '../component/AuthForm';
import NavLink from '../component/NavLink';

const SignupScreen = ({navigation,SignUp,TryLocalSignIn,ClearErrorMessage,auth:{errorMessage}}) =>{

    useEffect(() => {
        const removeError = navigation.addListener('focus',() =>{
            ClearErrorMessage();
        });

        return removeError;
        
    }, [navigation]);

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

export default connect(mapStateToProps,{SignUp,TryLocalSignIn,ClearErrorMessage})(SignupScreen);
