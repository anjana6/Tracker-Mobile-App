import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
import MapView,{Polyline} from 'react-native-maps';

const TrackDetailScreen = ({navigation,route,track}) =>{
    const {_id} = route.params;
    console.log(_id);
    const trackDetail = track.find(t  => t._id === _id);
    const initialCoords = trackDetail.locations[0].coords;
    return (
        <>
            <Text h4>{trackDetail.name}</Text>
            <MapView
                style={styles.map}
                initialRegion={{
                    longitudeDelta:0.01,
                    latitudeDelta:0.01,
                    ...initialCoords
                }}
            >

                <Polyline coordinates={trackDetail.locations.map(loc => loc.coords)}/>
            </MapView>
        </>
    )
}

const styles = StyleSheet.create({
    map:{
        height:300
    }
})

const mapStateToProps = state => ({
    track: state.track
});

export default connect(mapStateToProps)(TrackDetailScreen);
