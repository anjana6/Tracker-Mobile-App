import React,{useEffect,useState} from 'react';
import {View,StyleSheet} from 'react-native';
import Map from '../component/Map';
import {Text} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
//import {requestPermissionsAsync} from 'expo-location';


const TrackCreateScreen = () =>{
    const [err,setErr] = useState(null);

    useEffect(() => {
        //startWatching();
        getPermissionLocation();
     }, []);

     const getPermissionLocation = async () =>{
         console.log(Permissions);
         let {status} = await Permissions.askAsync(Permissions.LOCATION);
         console.log(status);
         if(status !== 'granted'){
            setErr('Please enable location services')
         }

     }

   
    // const startWatching = async () =>{
    //     try {
    //         await requestPermissionsAsync();
    //     } catch (err) {
    //         console.log(err);
    //         setErr(err)
    //     }
    // }

    
    //console.log(err);
    return (
        <SafeAreaView>
            <Text h3>TrackCreateScreen</Text>
            <Map/>
            {err? <Text>Please enable location services</Text> : null}

            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    
})

export default TrackCreateScreen;
