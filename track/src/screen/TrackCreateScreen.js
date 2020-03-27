//import '../_mockLocation';
import React,{useCallback} from 'react';
import {connect} from 'react-redux';
import Map from '../component/Map';
import {Text} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import {addLocation} from '../actions/locationAction';
import useLocation from '../hooks/useLocation';
import {withNavigationFocus} from '@react-navigation/compat';
import TrackForm from '../component/TrackForm'; 


const TrackCreateScreen = ({isFocused,addLocation,location:{recording}}) =>{
    const callback = useCallback((location) => {addLocation(location,recording)},[recording]);
    
    
    const [err] = useLocation(isFocused || recording,callback); 

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
