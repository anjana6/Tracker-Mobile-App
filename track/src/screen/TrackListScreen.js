import React,{useEffect} from 'react';
import {connect } from 'react-redux';
import {View,StyleSheet,Text} from 'react-native';
import {fetchTrack} from '../actions/trackAction';

const TrackListScreen = ({navigation,track,fetchTrack}) =>{
    useEffect(() => {
        console.log('oo');
        //fetchTrack();
        const unsubcribe = navigation.addListener('focus',() => {
             fetchTrack();

            return unsubcribe;
        });
       
    }, [navigation]);
    
    console.log(track);
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

const mapStateToProps = state =>({
    track: state.track
})

export default connect(mapStateToProps,{fetchTrack})(TrackListScreen);
