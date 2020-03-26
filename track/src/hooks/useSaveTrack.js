import React from 'react'
import {connect} from 'react-redux';
import { createTrack } from '../actions/trackAction';

const useSaveTrack = ({createTrack,location:{name,location}}) => {

    const saveTrack = () => {
        createTrack(name,location)
    }
    return [saveTrack];
}

const mapStateToProps = state =>({
    location: state.location
})

export default connect(mapStateToProps,createTrack)(useSaveTrack);
