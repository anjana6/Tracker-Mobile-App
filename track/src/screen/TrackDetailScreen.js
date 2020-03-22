import React from 'react';
import {View,StyleSheet,Text} from 'react-native';

const TrackDetailScreen = () =>{
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>TrackDetailScreen</Text>
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

export default TrackDetailScreen;
