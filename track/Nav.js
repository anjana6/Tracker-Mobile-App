import  React from 'react';
import {connect} from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import AccountScreen from './src/screen/AccountScreen';
import SigninScreen from './src/screen/SigninScreen';
import SignupScreen from './src/screen/SignupScreen';
import TrackCreateScreen from './src/screen/TrackCreateScreen';
import TrackDetailScreen from './src/screen/TrackDetailScreen';
import TrackListScreen from './src/screen/TrackListScreen';
import ResoleveAuthScreen from './src/screen/ResoleveAuthScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();

const Nav = ({auth:{token,isToken}}) =>{
    const mainStack = () => 
        <MaterialBottomTabs.Navigator>
            <MaterialBottomTabs.Screen name="TrackList" children={trackListFlowStack} options={{tabBarLabel:'Tracks',tabBarIcon:({red}) => (
                <Icon name="format-list-bulleted" color={red} size={26}/>
            )}}/>
            <MaterialBottomTabs.Screen name="TrackCreate" component={TrackCreateScreen} options={{tabBarLabel:'Add Tracker',tabBarIcon:({red}) => (
                <Icon name="plus" color={red} size={26}/>
            )}}/>
            <MaterialBottomTabs.Screen name="Account" component={AccountScreen} options={{tabBarLabel:'Account',tabBarIcon:({red}) => (
                <Icon name="settings" color={red} size={26}/>
            )}}/>
        </MaterialBottomTabs.Navigator>
    

    const trackListFlowStack = () =>
        <Stack.Navigator>
            <Stack.Screen name="TrackList" component={TrackListScreen} options={{title:"Tracks"}}/>
            <Stack.Screen name="TrackDetail" component={TrackDetailScreen} options={{title:''}}/>
        </Stack.Navigator>
    
    return(
        <NavigationContainer>
            <Stack.Navigator>
               { token == null? ( 
                    <> 
                        {token ==null && isToken? (
                                <>
                                    <Stack.Screen name="Resolve" component={ResoleveAuthScreen} options={{headerShown:false}}/>
                                </>
                            ) : ( 
                                <>
                                    <Stack.Screen name="Signup" component={SignupScreen} options={{headerShown:false}}/>
                                    <Stack.Screen name="Signin" component={SigninScreen} options={{headerShown:false}}/>
                                </> 
                            ) }
                    </>
               ) : (
                    <>
                        <Stack.Screen name="Main" component={mainStack} options={{headerShown:false}}/>
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps)(Nav);