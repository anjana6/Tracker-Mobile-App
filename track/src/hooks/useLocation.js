import React,{useEffect,useState} from 'react';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default (callback) => {
    const [err,setErr] = useState(null); 

    useEffect(() => {
        getPermissionLocation();
     }, []);

     const getPermissionLocation = async () =>{

        try {
            let {status} = await Permissions.askAsync(Permissions.LOCATION);
            if(status !== 'granted'){
                setErr('Please enable location services')
             }
             await Location.watchPositionAsync(
                {
                    accuracy:Location.Accuracy.BestForNavigation,
                    distanceInterval:1,
                    timeInterval:10
                },callback
            );
        } catch (err) {
            setErr(err);
        }
    }

    return  [err];
}


