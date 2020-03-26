import React from 'react';
import { StyleSheet,ActivityIndicator} from 'react-native';
import MapView,{Circle,Polyline} from 'react-native-maps';
import {connect } from 'react-redux';
//import { ActivityIndicator } from 'react-native-paper';

const Map = ({location:{currentLocation,location}}) =>{
    //console.log(currentLocation);
    if(!currentLocation) {
        return <ActivityIndicator size="large" style={{marginTop:200}}/>
};
    return (
        <MapView 
            style={styles.map}
            initialRegion={{
                ...currentLocation.coords,
                latitudeDelta:0.15,
                longitudeDelta:0.15
            }}  
            region={{
                ...currentLocation.coords,
                latitudeDelta:0.15,
                longitudeDelta:0.15 
            }}
        >
            <Circle
                center={currentLocation.coords}
                radius={320}
                strokeColor="blue"
                fillColor="rgba(158,158,255,0.3)"

            />
            <Polyline coordinates={location.map(loc => loc.coords)}/>
        </MapView>
        )
};

const styles = StyleSheet.create({
    map:{
        height: 300
    }
});

const mapStateToProps = state => ({
    location: state.location
});

export default connect(mapStateToProps)(Map);