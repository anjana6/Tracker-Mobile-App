import React from 'react';
import {View,StyleSheet} from 'react-native';
import {Button,Text} from 'react-native-elements';
import Spacer from '../component/Specer';
import { connect } from 'react-redux';
import {SingOut} from '../actions/authAction';
import {SafeAreaView} from 'react-native-safe-area-context';

const AccountScreen = ({SingOut}) =>{
    return (
        <SafeAreaView style={styles.container} >
            <Text h3>AccountScreen</Text>
            <Spacer>
            <Button title="Sign Out" onPress={SingOut}/>
            </Spacer>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center'
    }
})

export default connect(null,{SingOut})(AccountScreen);
