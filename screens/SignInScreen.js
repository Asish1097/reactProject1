import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Dimensions, TextInput, StyleSheet, StatusBar, Image,Alert } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
// import {LinearGradient} from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from "react-native-vector-icons/Ionicons";
import { useTheme } from "@react-navigation/native";
import { Button } from 'react-native-paper';

import { AuthContext } from "../Component/Context";
import Users from "../model/users";

function SignIn({ navigation }) {
    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });

    const { colors } = useTheme();

    const { signIn } = React.useContext(AuthContext);

     const textInputChange = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
                isValidUser:true,
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
                isValidUser:false,
            });
        }
    }

    const handleValidUser = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                isValidUser: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        if( val.trim().length >= 8 ) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    }
    const updateSecureTextEntry= ()=> {
            setData({
                ...data,
                secureTextEntry: !data.secureTextEntry       
            });
    }

    const loginHandle = (userName, password) => {

        const foundUser = Users.filter( item => {
            return userName == item.username && password == item.password;
        } );

        if ( data.username.length == 0 || data.password.length == 0 ) {
            Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
                {text: 'Okay'}
            ]);
            return;
        }

        if ( foundUser.length == 0 ) {
            Alert.alert('Invalid User!', 'Username or password is incorrect.', [
                {text: 'Okay'}
            ]);
            return;
        }
        signIn(foundUser);
    }


  return (
      <View style={{ flex: 1, backgroundColor: '#009387' }}>
          
          <View style={{ flex: 1,justifyContent: 'flex-end',paddingHorizontal: 20,paddingBottom: 50 }}>
              <Text style={{color: '#fff',fontWeight: 'bold',fontSize: 30}}>Welcome!</Text>
          </View>
          <Animatable.View  animation="fadeInUpBig" style={{ flex: 3, backgroundColor: '#fff', borderTopLeftRadius: 30, borderTopRightRadius: 30, paddingHorizontal: 20, paddingVertical: 30,backgroundColor:colors.background }}>
              <Text style={{ color: '#05375a', fontSize: 18,color:colors.text }}>Username</Text>
              <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#f2f2f2', paddingBottom: 5, marginTop:15 }}>
                <Icon 
                    name="ios-person"
                    color="black"
                    size={20}
                />
                <TextInput 
                    placeholder="Your Username"
                    placeholderTextColor="#666666"
                    style={{ flex: 1, paddingLeft: 10, color: '#05375a', color:colors.text }} autoCapitalize="none"
                    onChangeText={(val) => textInputChange(val)}
                    onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
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
              {data.isValidUser ? null :
                  <Animatable.View animation="fadeInLeft" duration={500}>
                      <Text style={{ color: '#FF0000', fontSize: 14 }}>Username must be 4 characters long.</Text>
                  </Animatable.View>
              }

              <Text style={{ color: '#05375a', fontSize: 18, marginTop:30, color:colors.text }}>Password</Text>
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
                      style={{ flex: 1, paddingLeft: 10, color: '#05375a', color:colors.text }} autoCapitalize="none"
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
              {data.isValidPassword ? null :
                <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={{ color: '#FF0000', fontSize: 14 }}>password must be 8 characters long.</Text>
                </Animatable.View>
              }
              

              <TouchableOpacity>
                <Text style={{color: '#009387', marginTop:10}}>Forgot password?</Text>
                </TouchableOpacity>

              <View style={{ alignItems: 'center', marginTop: 40 }}>
                  <TouchableOpacity style={{ backgroundColor: "#08d4c4", width: '100%', height: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}
                      onPress={() => { loginHandle(data.username, data.password) }}
                  >
                    <Text style={{fontSize: 18, fontWeight: 'bold', color:'white'}}>Sign In</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate('SignUp')}
                      style={{
                            width: '100%', height: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 10,
                            borderColor: '#009387',borderWidth: 1,marginTop: 10}}>
                      <Text style={{fontSize: 18, fontWeight: 'bold', color:'#009387'}}>Sign Up</Text>
                  </TouchableOpacity>
              </View>
          </Animatable.View>
    </View>
  );
}


export default SignIn;
