import  React,{useEffect} from 'react';
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


const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();

const Nav = ({auth:{token,isToken}}) =>{
    const mainStack = () => 
        <MaterialBottomTabs.Navigator>
            <MaterialBottomTabs.Screen name="TrackList" children={trackListFlowStack}/>
            <MaterialBottomTabs.Screen name="TrackCreate" component={TrackCreateScreen}/>
            <MaterialBottomTabs.Screen name="Account" component={AccountScreen}/>
        </MaterialBottomTabs.Navigator>
    

    const trackListFlowStack = () =>
        <Stack.Navigator>
            <Stack.Screen name="TrackList" component={TrackListScreen}/>
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