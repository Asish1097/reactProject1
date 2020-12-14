import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions, StyleSheet, StatusBar, Image } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
// import {LinearGradient} from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from "@react-navigation/native";


function Splash({ navigation }) {
  const { colors } = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: '#009387' }}>
      <StatusBar barStyle="light-content" backgroundColor="#009387"/>
          <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
              <Animatable.Image
                  animation="bounceIn"
                duraton="1500"
                  source={require('../assets/logo.png')}
                style={{width: 200, height: 200}}
                resizeMode="stretch"/>
          </View>
          <Animatable.View style={{ flex: 1, backgroundColor: '#fff', borderTopLeftRadius: 30, borderTopRightRadius: 30, paddingVertical: 50, paddingHorizontal: 30,backgroundColor:colors.background }} animation="fadeInUpBig">
              <Text style={{color: '#05375a',fontSize: 30,fontWeight: 'bold',color:colors.text}}>Stay connected with everyone</Text>
              <Text style={{ color: 'grey', marginTop: 5 }}>Sign in with account </Text>
              <View style={{alignItems: 'flex-end',marginTop: 30}}>
                <TouchableOpacity onPress={()=>navigation.navigate('SignIn')}>
                    <View style={{backgroundColor:"#08d4c4",width: 150,height: 40,justifyContent: 'center',alignItems: 'center',borderRadius: 50,flexDirection: 'row'}}>
                        <Text style={{color: 'white',fontWeight: 'bold'}}>Get Started</Text>
                        <MaterialIcons 
                            name="navigate-next"
                            color="#fff"
                            size={20}
                        />
                        </View>
                  </TouchableOpacity>
              </View>
          </Animatable.View>
    </View>
  );
}

export default Splash;
