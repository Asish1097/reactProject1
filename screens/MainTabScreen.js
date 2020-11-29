import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from "react-native-vector-icons/Ionicons";

import Home from './HomeScreen';
import Details from './DetailsScreen';
import Profile from './ProfileScreen';
import Explore from './ExploreScreen';


const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const ExploreStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function MainTabScreen() {
    return (
       <Tab.Navigator
      initialRouteName="Home"
      activeColor="white"
      
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor:'red',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: 'Updates',
          tabBarColor:'blue',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-notifications" color={color} size={26} />
          ),
        }}
      />
        <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor:'orange',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
        />
        <Tab.Screen
        name="Explore"
        component={ExploreStackScreen}
        options={{
          tabBarLabel: 'Updates',
          tabBarColor:'green',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-aperture" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>  
    );
}

export default MainTabScreen;


function HomeStackScreen({ navigation }) {
  return (
    <HomeStack.Navigator screenOptions={{
      headerStyle: { backgroundColor: "red" },
      headerTintColor: 'white',
      headerTitleStyle: { fontWeight: 'bold' }
    }}>
      <HomeStack.Screen name="Home" component={Home}
        options={{
          title: 'MENU',
          headerLeft: () => (<Icon.Button name='ios-menu' size={25} backgroundColor='red' onPress={() => { navigation.openDrawer() }}></Icon.Button>)
        }} />
    </HomeStack.Navigator>
  );
}

function DetailsStackScreen({ navigation}) {
  return (
    <DetailsStack.Navigator screenOptions={{
      headerStyle: { backgroundColor: "blue" },
      headerTintColor: 'white',
      headerTitleStyle: { fontWeight: 'bold' }
    }}>
      <DetailsStack.Screen name="Details" component={Details}
      options={{
          headerLeft: () => (<Icon.Button name='ios-menu' size={25} backgroundColor='blue' onPress={() => { navigation.openDrawer() }}></Icon.Button>)
        }}/>
    </DetailsStack.Navigator>
  );
}

function ProfileStackScreen({ navigation}) {
  return (
    <ProfileStack.Navigator screenOptions={{
      headerStyle: { backgroundColor: "orange" },
      headerTintColor: 'white',
      headerTitleStyle: { fontWeight: 'bold' }
    }}>
      <ProfileStack.Screen name="Profile" component={Profile}
      options={{
          headerLeft: () => (<Icon.Button name='ios-menu' size={25} backgroundColor='orange' onPress={() => { navigation.openDrawer() }}></Icon.Button>)
        }}/>
    </ProfileStack.Navigator>
  );
}

function ExploreStackScreen({ navigation}) {
  return (
    <ExploreStack.Navigator screenOptions={{
      headerStyle: { backgroundColor: "green" },
      headerTintColor: 'white',
      headerTitleStyle: { fontWeight: 'bold' }
    }}>
      <ExploreStack.Screen name="Explore" component={Explore}
      options={{
          headerLeft: () => (<Icon.Button name='ios-menu' size={25} backgroundColor='green' onPress={() => { navigation.openDrawer() }}></Icon.Button>)
        }}/>
    </ExploreStack.Navigator>
  );
}
