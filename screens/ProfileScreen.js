import React, { Component } from 'react';
import { SafeAreaView ,View, StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Avatar, Title, Caption, Text, TouchableRipple } from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function Profile({ navigation }) {
        return (
            <SafeAreaView style={[styles.container]}>
                <ScrollView>
                <View style={styles.userInfoSection}>
                    <View style={{flexDirection: 'row', marginTop: 15}}>
                        <Avatar.Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2ahu9gamYbFUTSjqebuPw0yY2H8f6joDQ_Q&usqp=CAU" }} size={80} />
                        <View style={{marginLeft:15}}>
                            <Title style={[styles.title],{marginTop:15,marginBottom:5}}>Asish kumar</Title>
                            <Caption style={styles.caption}>@asish1234</Caption>
                        </View>
                    </View>
                </View>
                
                <View style={styles.userInfoSection}>
                    <View style={styles.row}>
                        <Icon name="map-marker-radius" color="#777777" size={20}/>
                        <Text style={{color:"#777777", marginLeft: 20}}>Kolkata, India</Text>
                    </View>
                    <View style={styles.row}>
                        <Icon name="phone" color="#777777" size={20}/>
                        <Text style={{color:"#777777", marginLeft: 20}}>+91-900000009</Text>
                    </View>
                    <View style={styles.row}>
                        <Icon name="email" color="#777777" size={20}/>
                        <Text style={{color:"#777777", marginLeft: 20}}>asish123@gmail.com</Text>
                    </View>
                </View>

                <View style={styles.infoBoxWrapper}>
                    <View style={[styles.infoBox, {borderRightColor: '#dddddd',borderRightWidth: 1}]}>
                        <Title>₹140.50</Title>
                        <Caption>Wallet</Caption>
                    </View>
                    <View style={styles.infoBox}>
                        <Title>12</Title>
                        <Caption>Orders</Caption>
                    </View>
                </View>

                <View style={styles.menuWrapper}>
                    <TouchableRipple onPress={() => {}}>
                    <View style={styles.menuItem}>
                        <Icon name="heart-outline" color="#FF6347" size={25}/>
                        <Text style={styles.menuItemText}>Your Favorites</Text>
                    </View>
                    </TouchableRipple>
                    <TouchableRipple onPress={() => {}}>
                    <View style={styles.menuItem}>
                        <Icon name="credit-card" color="#FF6347" size={25}/>
                        <Text style={styles.menuItemText}>Payment</Text>
                    </View>
                    </TouchableRipple>
                    <TouchableRipple onPress={()=>{}}>
                    <View style={styles.menuItem}>
                        <Icon name="share-outline" color="#FF6347" size={25}/>
                        <Text style={styles.menuItemText}>Tell Your Friends</Text>
                    </View>
                    </TouchableRipple>
                    <TouchableRipple onPress={() => {}}>
                    <View style={styles.menuItem}>
                        <Icon name="account-check-outline" color="#FF6347" size={25}/>
                        <Text style={styles.menuItemText}>Support</Text>
                    </View>
                    </TouchableRipple>
                    <TouchableRipple onPress={() => {}}>
                    <View style={styles.menuItem}>
                        <Icon name="settings-outline" color="#FF6347" size={25}/>
                        <Text style={styles.menuItemText}>Settings</Text>
                    </View>
                    </TouchableRipple>
                </View>
                </ScrollView>
            </SafeAreaView>
        );
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});

