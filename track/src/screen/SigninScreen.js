import React,{useEffect} from 'react';
import {View,StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {SignIn,ClearErrorMessage} from '../actions/authAction';
import AuthForm from '../component/AuthForm';
import NavLink from '../component/NavLink';

const SigninScreen = ({navigation,SignIn,ClearErrorMessage,auth:{errorMessage}}) =>{

    useEffect(() => {
        console.log("sIn");
        const removeError = navigation.addListener('focus',() =>{
            ClearErrorMessage();
        });

        return removeError
        
    }, [navigation]);
    
    return (
        <View style={styles.container}>
            <AuthForm
                headerText="Sign In to Your Account"
                errorMessage={errorMessage}
                submitButtonText="Sign In"
                onSubmit={SignIn}
            />
            <NavLink
                routeName = "Signup"
                text = "Dont have an account? Sign up instead"
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

export default connect(mapStateToProps,{SignIn,ClearErrorMessage})(SigninScreen);
