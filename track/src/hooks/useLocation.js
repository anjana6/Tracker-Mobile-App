import {useEffect,useState} from 'react';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default (shouldTrack,callback) => {
    const [err,setErr] = useState(null); 
    

    useEffect(() => {
        let subscriber;
        const getPermissionLocation = async () =>{

            try {
                let {status} = await Permissions.askAsync(Permissions.LOCATION);
                if(status !== 'granted'){
                    setErr('Please enable location services')
                 }
                 subscriber =  await Location.watchPositionAsync(
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
        if(shouldTrack){
        getPermissionLocation();
        }else{
            if(subscriber){subscriber.remove();}
            
            subscriber =null;
        }

        return () => {
            if(subscriber){
                subscriber.remove();
            }
        }
     }, [shouldTrack,callback]);
 
    

    return  [err];
}


