import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions, TextInput, StyleSheet, StatusBar, Image } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
// import {LinearGradient} from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from "react-native-vector-icons/Ionicons";
import { Button } from 'react-native-paper';

function SignIn({ navigation }) {

    const [data, setData] = React.useState({
        username: '',
        password: '',
        confirm_password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry:true,
    });

     const textInputChange = (val) => {
        if( val.length != 0 ) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
                 
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
                
            });
        }
    }

    const handlePasswordChange = (val) => {
            setData({
                ...data,
                password: val,
               
            });
    }
    const handleConfirmPasswordChange = (val) => {
            setData({
                ...data,
                confirm_password: val,
               
            });
    }
    const updateSecureTextEntry= ()=> {
            setData({
                ...data,
                secureTextEntry: !data.secureTextEntry       
            });
    }
    const updateConfirmSecureTextEntry= ()=> {
            setData({
                ...data,
                confirm_secureTextEntry: !data.confirm_secureTextEntry       
            });
        }

  return (
      <View style={{ flex: 1, backgroundColor: '#009387' }}>
          <StatusBar backgroundColor='#009387' barStyle="light-content"/>
          <View style={{ flex: 1,justifyContent: 'flex-end',paddingHorizontal: 20,paddingBottom: 50 }}>
              <Text style={{color: '#fff',fontWeight: 'bold',fontSize: 30}}>Register Now!</Text>
          </View>
          <Animatable.View  animation="fadeInUpBig" style={{ flex: 3, backgroundColor: '#fff', borderTopLeftRadius: 30, borderTopRightRadius: 30, paddingHorizontal: 20, paddingVertical: 30 }}>
              <Text style={{ color: '#05375a', fontSize: 18 }}>Email</Text>
              <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#f2f2f2', paddingBottom: 5, marginTop:15 }}>
                <Icon 
                    name="ios-person"
                    color="black"
                    size={20}
                />
                <TextInput 
                    placeholder="Your Email"
                    placeholderTextColor="#666666"
                    style={{ flex: 1, paddingLeft: 10, color: '#05375a' }} autoCapitalize="none"
                    onChangeText={(val) => textInputChange(val)}
                />
                {data.check_textInputChange ? 
                <Animatable.View animation="bounceIn">
                    <MaterialIcons 
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                </Animatable.View>
                : null}
              </View>

              <Text style={{ color: '#05375a', fontSize: 18, marginTop:10 }}>Password</Text>
              <View style={{ flexDirection: 'row', marginTop: 10, borderBottomWidth: 1, borderBottomColor: '#f2f2f2', paddingBottom: 5 }}>
                <MaterialIcons 
                    name="lock"
                    color="black"
                    size={20}
                />
                <TextInput 
                    placeholder="Your password"
                      placeholderTextColor="#666666"
                      secureTextEntry={data.secureTextEntry ? true : false}
                      style={{ flex: 1, paddingLeft: 10, color: '#05375a' }} autoCapitalize="none"
                    onChangeText={(val) => handlePasswordChange(val)}
                />
                <TouchableOpacity
                    onPress={updateSecureTextEntry}
                >
                {data.secureTextEntry ? 
                   <Icon
                        name="ios-eye-off"
                        color="grey"
                        size={20}
                    />
                    :
                    <Icon 
                        name="ios-eye"
                        color="grey"
                        size={20}
                    />
                    }      
                </TouchableOpacity>
              </View>
        
              <Text style={{ color: '#05375a', fontSize: 18, marginTop:10 }}>Confirm Password</Text>
              <View style={{ flexDirection: 'row', marginTop: 10, borderBottomWidth: 1, borderBottomColor: '#f2f2f2', paddingBottom: 5 }}>
                <MaterialIcons 
                    name="lock"
                    color="black"
                    size={20}
                />
                <TextInput 
                    placeholder="Your password"
                      placeholderTextColor="#666666"
                      secureTextEntry={data.confirm_secureTextEntry ? true : false}
                      style={{ flex: 1, paddingLeft: 10, color: '#05375a' }} autoCapitalize="none"
                    onChangeText={(val) => handleConfirmPasswordChange(val)}
                />
                <TouchableOpacity
                    onPress={updateConfirmSecureTextEntry}
                >
                {data.secureTextEntry ? 
                   <Icon
                        name="ios-eye-off"
                        color="grey"
                        size={20}
                    />
                    :
                    <Icon 
                        name="ios-eye"
                        color="grey"
                        size={20}
                    />
                    }      
                </TouchableOpacity>
              </View>
        
              <View style={{ alignItems: 'center', marginTop: 15 }}>
                  <View style={{backgroundColor:"#08d4c4",width: '100%',height: 50,justifyContent: 'center',alignItems: 'center',borderRadius: 10}}>
                    <Text style={{fontSize: 18, fontWeight: 'bold', color:'white'}}>Sign up</Text>
                  </View>
                  <TouchableOpacity onPress={() => navigation.goBack()}
                      style={{
                            width: '100%', height: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 10,
                            borderColor: '#009387',borderWidth: 1,marginTop: 15}}>
                      <Text style={{fontSize: 18, fontWeight: 'bold', color:'#009387'}}>Sign in</Text>
                  </TouchableOpacity>
              </View>
          </Animatable.View>
    </View>
  );
}


export default SignIn;
