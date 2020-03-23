import React from 'react';
import {View,StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {SignIn} from '../actions/authAction';
import AuthForm from '../component/AuthForm';
import NavLink from '../component/NavLink';

const SigninScreen = ({SignIn,auth:{errorMessage}}) =>{
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

export default connect(mapStateToProps,{SignIn})(SigninScreen);
