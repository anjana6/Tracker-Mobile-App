import React from 'react';
import {View,StyleSheet,Text} from 'react-native';
import {Button} from 'react-native-elements';
import Spacer from '../component/Specer';
import { connect } from 'react-redux';
import {SingOut} from '../actions/authAction';

const AccountScreen = ({SingOut}) =>{
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>AccountScreen</Text>
            <Spacer>
            <Button title="Sign Out" onPress={SingOut}/>
            </Spacer>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle:{
        margin:30
    },
    textStyle:{
        fontSize:40
    }
})

export default connect(null,{SingOut})(AccountScreen);
