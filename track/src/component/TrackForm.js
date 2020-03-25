import React from 'react';
import {Input,Button} from 'react-native-elements';
import Spacer from './Specer';
import {connect  } from 'react-redux';
import {startRecording,stopRecording,changeName} from '../actions/locationAction';

const TrackForm = ({location:{name,recording,location},startRecording,stopRecording,changeName}) => {
    //console.log(location.length);
    return ( 
        <>
            <Spacer>
                <Input value={name} placeholder="Enter Name" onChangeText={changeName}/>
            </Spacer>
            {recording
                ? <Button title="Stop Recording" onPress={stopRecording}/> 
                : <Button title="Start Recording" onPress={startRecording}/>
                }
                
        </>
    ) 
}

const mapStateToProps = state => ({
    location:state.location
})

export default  connect(mapStateToProps,{startRecording,stopRecording,changeName})(TrackForm);
