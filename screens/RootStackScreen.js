import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { Button, StyleSheet, Text, View } from 'react-native';

import Splash from "./SplashScreen";
import SignUp from './SignUpScreen';
import SignIn from './SignInScreen';


const RootStack = createStackNavigator();

function RootStackScreen({navigation}) {
  return (
    <RootStack.Navigator headerMode='none'>
      <RootStack.Screen name="Splash" component={Splash} />
      <RootStack.Screen name="SignIn" component={SignIn} />
      <RootStack.Screen name="SignUp" component={SignUp} />
    </RootStack.Navigator>
  );
}

export default RootStackScreen;