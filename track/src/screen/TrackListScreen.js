import React,{useEffect} from 'react';
import {connect } from 'react-redux';
import {View,StyleSheet,Text,TouchableOpacity,FlatList} from 'react-native';
import {fetchTrack} from '../actions/trackAction';
import {ListItem} from 'react-native-elements';

const TrackListScreen = ({navigation,track,fetchTrack}) =>{
    useEffect(() => {
        //console.log('oo');
        //fetchTrack();
        const unsubcribe = navigation.addListener('focus',() => {
             fetchTrack();

            return unsubcribe;
        });
       
    }, [navigation]);
    
    //console.log(track);
    return (
        <View>
            <Text style={styles.textStyle}>TrackListScreen</Text>
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
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle:{
        margin:30
    },
    textStyle:{
        fontSize:40
    }
})

const mapStateToProps = state =>({
    track: state.track
})

export default connect(mapStateToProps,{fetchTrack})(TrackListScreen);
