//import '../_mockLocation';
import React,{useEffect,useState} from 'react';
import {connect} from 'react-redux';
import {View,StyleSheet} from 'react-native';
import Map from '../component/Map';
import {Text} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import {addLocation} from '../actions/locationAction';
import useLocation from '../hooks/useLocation';
import {withNavigationFocus} from '@react-navigation/compat';
//import {requestPermissionsAsync} from 'expo-location';
import TrackForm from '../component/TrackForm'; 


const TrackCreateScreen = ({isFocused,addLocation,location:{recording}}) =>{
    console.log('1');
    
    const [err] = useLocation(isFocused,(location) => {addLocation(location,recording)}); 
    

    return ( 
        <SafeAreaView>
            <Text h3>TrackCreateScreen</Text>
            <Map/>
            {err? <Text>Please enable location services</Text> : null}

            <TrackForm/> 

            
        </SafeAreaView>
    )
}


const mapStateToProps = state => ({
    location: state.location
})

export default connect(mapStateToProps,{addLocation})(withNavigationFocus(TrackCreateScreen));
