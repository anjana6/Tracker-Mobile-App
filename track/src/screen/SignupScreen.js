import React,{useState} from 'react';
import {connect} from 'react-redux';
import {View,StyleSheet} from 'react-native';
import {Text,Input,Button} from 'react-native-elements';
import Spacer from '../component/Specer';
import {SignUp} from '../actions/authAction';

const SignupScreen = ({navigation,SignUp,auth:{errorMessage}}) =>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    //console.log(errorMessage)

    return (
        <View style={styles.container}>
            <Spacer>
            <Text h3>Sign Up for Tracker</Text>
            </Spacer> 
            <Input 
                label="Email" 
                value={email} 
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Spacer/>
            <Input 
                secureTextEntry
                label="Password" 
                value={password} 
                onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
            />
           {errorMessage?<Text style={styles.errorMessage}>{errorMessage}</Text>:null}
            <Spacer>
            <Button title="Sign Up" onPress={() => SignUp({email,password})}/>
            </Spacer>
        </View>
    )
}

const styles = StyleSheet.create({ 
    container:{
        flex:1,
        justifyContent:'center',
        marginBottom:250
    },
    errorMessage:{
        fontSize:16,
        color: 'red',
        marginTop:15,
        marginLeft:20
    }
});

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps,{SignUp})(SignupScreen);
