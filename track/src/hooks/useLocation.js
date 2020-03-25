import React,{useEffect,useState} from 'react';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default (shouldTrack,callback) => {
    const [err,setErr] = useState(null); 
    const [subscriber,setSubscriber] = useState(null);  

    useEffect(() => {
        console.log("2");
        if(shouldTrack){
        getPermissionLocation();
        }else{
            subscriber.remove();
            setSubscriber(null);
        }
     }, [shouldTrack]);

     const getPermissionLocation = async () =>{

        try {
            let {status} = await Permissions.askAsync(Permissions.LOCATION);
            if(status !== 'granted'){
                setErr('Please enable location services')
             }
            const sub =  await Location.watchPositionAsync(
                {
                    accuracy:Location.Accuracy.BestForNavigation,
                    distanceInterval:1,
                    timeInterval:10
                },callback
            );
            setSubscriber(sub);
        } catch (err) {
            setErr(err);
        }
    }

    return  [err];
}


