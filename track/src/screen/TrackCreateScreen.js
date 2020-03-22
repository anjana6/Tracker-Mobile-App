import React from 'react';
import {View,StyleSheet,Text} from 'react-native';

const TrackCreateScreen = () =>{
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>TrackCreateScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle:{
        margin:30
    },
    textStyle:{
        fontSize:50
    }
})

export default TrackCreateScreen;
