import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, View } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons"


import MainTabScreen from './screens/MainTabScreen';
import { DrawerContent } from './screens/DrawerContent';
import Bookmark from './screens/BookmarkScreen';
import Support from './screens/SupportScreen';
import Setting from './screens/SettingScreen';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props=><DrawerContent{...props}/>}>
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
        <Drawer.Screen name="Bookmark" component={Bookmark} />
        <Drawer.Screen name="Setting" component={Setting} />
        <Drawer.Screen name="Support" component={Support} />

      </Drawer.Navigator>
      
    </NavigationContainer>
  );
}

export default App;