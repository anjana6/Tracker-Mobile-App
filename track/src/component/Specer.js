import React from 'react';
import {View,StyleSheet} from 'react-native';

const Specer = ({children}) => {
    return (
        <View style={styles.spacer}>
            {children}
        </View>
    )
};

const styles = StyleSheet.create({
    spacer:{
        margin:15
    }
})

export default Specer
