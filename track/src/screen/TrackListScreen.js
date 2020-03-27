import React,{useEffect} from 'react';
import {connect } from 'react-redux';
import {TouchableOpacity,FlatList} from 'react-native';
import {fetchTrack} from '../actions/trackAction';
import {ListItem} from 'react-native-elements';

const TrackListScreen = ({navigation,track,fetchTrack}) =>{
    useEffect(() => {
    
        const unsubcribe = navigation.addListener('focus',() => {
             fetchTrack();

            return unsubcribe;
        });
       
    }, [navigation]);
    
    return (
        <>
            
            <FlatList 
                data={track}
                keyExtractor={item => item._id}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('TrackDetail',{_id: item._id})}>
                            <ListItem chevron title={item.name}/>
                        </TouchableOpacity>
                    )
                }}
            />
        </>
    )
}

const mapStateToProps = state =>({
    track: state.track
})

export default connect(mapStateToProps,{fetchTrack})(TrackListScreen);
