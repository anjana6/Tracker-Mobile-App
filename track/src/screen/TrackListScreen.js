import React from 'react';
import {View,StyleSheet,Text} from 'react-native';

const TrackListScreen = () =>{
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>TrackListScreen</Text>
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

export default TrackListScreen;
