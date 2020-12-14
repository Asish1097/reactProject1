import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer, DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, View } from 'react-native';
import { AsyncStorage } from 'react-native';
import { Provider as PaperProvider, DefaultTheme as PaperDefaultTheme,DarkTheme as PaperDarkTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
// import Icon from "react-native-vector-icons/Ionicons"


import MainTabScreen from './screens/MainTabScreen';
import { DrawerContent } from './screens/DrawerContent';
import Bookmark from './screens/BookmarkScreen';
import Support from './screens/SupportScreen';
import Setting from './screens/SettingScreen';

import { AuthContext } from './Component/Context';
// import AsyncStorage from '@react-native-community/async-storage';


import RootStackScreen from './screens/RootStackScreen';
import { ActivityIndicator } from 'react-native-paper';

const Drawer = createDrawerNavigator();

function App() {
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(true);

  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#ffffff',
      text: '#333333'
    }
  }
  
  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#333333',
      text: '#ffffff'
    }
  }

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  const loginReducer = (prevState, action) => {
    switch( action.type ) {
      case 'RETRIEVE_TOKEN': 
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT': 
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  const authContext = React.useMemo(() => ({
    signIn: async(foundUser) => {
      // setUserToken('abcd');
      // setIsLoading(false);
      const userToken = String(foundUser[0].userToken);
      const userName = foundUser[0].username;
        try {
          await AsyncStorage.setItem('userToken', userToken);
        } catch (e) {
          console.log(e);
        }
      // console.log('user token:', userToken);
      dispatch({type:'LOGIN', id: userName, token: userToken });
     },
    signOut: async() => {
      // setUserToken(null);
      // setIsLoading(false);
      try {
          userToken = 'abcde';
          await AsyncStorage.removeItem('userToken');
        } catch (e) {
          console.log(e);
        }
      dispatch({type:'LOGOUT' });
     },
    signUp: () => {
      setUserToken('abcd');
      setIsLoading(false);
    },
    toggleTheme: () => {
      setIsDarkTheme( isDarkTheme => !isDarkTheme );
    },
  }),[]);

  useEffect(()=> {
    setTimeout(async() => {
      // setIsLoading(false);
      let userToken;
      userToken = null;
       try {
          userToken = await AsyncStorage.getItem('userToken');
        } catch (e) {
          console.log(e);
        }
      // console.log('user token:', userToken);
      dispatch({ type: 'REGISTER', token: userToken });
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <PaperProvider theme={theme}>
    <AuthContext.Provider value={authContext}>
      <NavigationContainer theme={theme}>
        {loginState.userToken != null ? (
          <Drawer.Navigator drawerContent={props => <DrawerContent{...props} />}>
            <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
            <Drawer.Screen name="Bookmark" component={Bookmark} />
            <Drawer.Screen name="Setting" component={Setting} />
            <Drawer.Screen name="Support" component={Support} />
          </Drawer.Navigator>
        ) :
          <RootStackScreen />
        }
      </NavigationContainer>
      </AuthContext.Provider>
      </PaperProvider>
  );
}

export default App;