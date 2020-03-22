import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import AccountScreen from './src/screen/AccountScreen';
import SigninScreen from './src/screen/SigninScreen';
import SignupScreen from './src/screen/SignupScreen';
import TrackCreateScreen from './src/screen/TrackCreateScreen';
import TrackDetailScreen from './src/screen/TrackDetailScreen';
import TrackListScreen from './src/screen/TrackListScreen';

const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();

const Nav = () =>{

    const loginStack = () => 
        <Stack.Navigator>
            <Stack.Screen name="Signup" component={SignupScreen}/>
            <Stack.Screen name="Signin" component={SigninScreen}/>
        </Stack.Navigator>
    
    const mainStack = () => 
        <MaterialBottomTabs.Navigator>
            <MaterialBottomTabs.Screen name="TrackList" children={trackListFlowStack}/>
            <MaterialBottomTabs.Screen name="TrackCreate" component={TrackCreateScreen}/>
            <MaterialBottomTabs.Screen name="Account" component={AccountScreen}/>
        </MaterialBottomTabs.Navigator>
    

    const trackListFlowStack = () =>
        <Stack.Navigator>
            <Stack.Screen name="TrackList" component={TrackListScreen}/>
            <Stack.Screen name="TrackDetailScreen" component={TrackDetailScreen}/>
        </Stack.Navigator>
    
    return(
        <NavigationContainer>
            <Stack.Navigator 
>
                {/* <Stack.Screen name="login" children={loginStack}/> */}
                <Stack.Screen name="Signup" component={SignupScreen} options={{headerShown:false}}/>
                <Stack.Screen name="Signin" component={SigninScreen} />
                <Stack.Screen name="Main" children={mainStack} options={{headerShown:false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Nav;