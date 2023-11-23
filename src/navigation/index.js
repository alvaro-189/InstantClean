import React from "react";
import { View,Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SingInScreen from "../screens/SingInScreen";
import SingUpScreen from "../screens/SingUpScreen";
import ConfirmEmailScreen from "../screens/ConfirmEmailScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import NewPasswordScreen from "../screens/NewPasswordScreen";
import HomeScreen from "../screens/HomeScreen";
import ConfigurationScreen from "../screens/ConfigurationScreen";
import ProfileScreen from "../screens/ProfileScreen";
const Stack = createNativeStackNavigator();

const Navigation =()=>{
    return(
        <NavigationContainer>
           <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="SingIn" component={SingInScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="SingUp" component={SingUpScreen} />
            <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
            <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
            <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
            <Stack.Screen name="Configuration" component={ConfigurationScreen}/>
            <Stack.Screen name="Profile" component={ProfileScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Navigation