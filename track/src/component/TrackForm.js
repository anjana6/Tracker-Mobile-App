import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Input,Button} from 'react-native-elements';
import Spacer from './Specer';
import {connect  } from 'react-redux';
import {startRecording,stopRecording,changeName,reset} from '../actions/locationAction';
import {createTrack } from '../actions/trackAction';
import useSaveTrack from '../hooks/useSaveTrack';


const TrackForm = ({location:{name,recording,location},startRecording,stopRecording,changeName,createTrack,reset}) => {
    const navigation = useNavigation();
    const saveTrack = (name,location) => {
        createTrack(name,location);
        reset();
        navigation.navigate('TrackList');
    }

    
    return ( 
        <>
            <Spacer>
                <Input value={name} placeholder="Enter Name" onChangeText={changeName}/>
            </Spacer>
            <Spacer>
            {recording
                ? <Button title="Stop Recording" onPress={stopRecording}/> 
                : <Button title="Start Recording" onPress={startRecording}/>
            }
                </Spacer>
                <Spacer>
                {
                    !recording && location.length
                        ?<Button title="Save Recording" onPress={() =>{saveTrack(name,location)}}/>
                        : null
                }
                </Spacer>
        </>
    ) 
}

const mapStateToProps = state => ({
    location:state.location
})

export default  connect(mapStateToProps,{startRecording,stopRecording,changeName,createTrack,reset})(TrackForm);
