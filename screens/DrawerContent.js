import React from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch, ToggleButton } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export function DrawerContent(props) {
    const [isDarkTheme, setIsDarkTheme] = React.useState(false);
    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    }
    return (
        <View style={{flex:1}}>
            <DrawerContentScrollView{...props}>
                <View style={{ flex: 1 }}>
                    
                    <View style={{ paddingLeft: 20 }}>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <Avatar.Image source={{ uri: 'https://cdn.shopify.com/s/files/1/0045/5104/9304/t/27/assets/AC_ECOM_SITE_2020_REFRESH_1_INDEX_M2_THUMBS-V2-1.jpg?v=8913815134086573859' }} size={50} style={{marginTop:5}}/>
                            <View style={{marginLeft:20}}>
                                <Title style={{ fontSize: 16,fontWeight: 'bold',}}>Asish kumar</Title>
                                <Caption style={{fontSize: 14,lineHeight: 14,}}>@abcd1234</Caption>
                            </View>
                        </View>

                        <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', }}>
                            <View style={{flexDirection: 'row',alignItems: 'center',marginRight: 15}}>
                                <Paragraph style={{ fontWeight: 'bold', marginRight: 3, fontSize: 14, lineHeight: 14 }}>80</Paragraph>
                                <Caption style={{fontSize: 14,lineHeight: 14}}>following</Caption>
                            </View>
                            <View style={{flexDirection:'row',alignItems: 'center',marginRight: 15}}>
                                <Paragraph style={{fontWeight: 'bold',marginRight: 3,fontSize: 14,lineHeight: 14}}>160</Paragraph>
                                <Caption style={{fontSize: 14,lineHeight: 14}}>followers</Caption>
                            </View>
                        </View>
                    </View>

                    <Drawer.Section style={{ marginTop: 10 }}>
                        <DrawerItem 
                            icon={({color, size}) => (
                            <Icon name="home-outline" color={color} size={size} />)}
                            label="Home"
                            onPress={() => {props.navigation.navigate ('Home')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                            <Icon name="account-outline" color={color} size={size} />)}
                            label="Profile"
                            onPress={() => {props.navigation.navigate ('Profile')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                            <Icon name="bookmark-outline" color={color} size={size} />)}
                            label="Bookmark"
                            onPress={() => {props.navigation.navigate ('Bookmark')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                            <Icon name="settings-outline" color={color} size={size} />)}
                            label="Settings"
                            onPress={() => {props.navigation.navigate ('Setting')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                            <Icon name="account-check-outline" color={color} size={size} />)}
                            label="Support"
                            onPress={() => {props.navigation.navigate ('Support')}}
                        />
                    </Drawer.Section>

                    <Drawer.Section title="preferences">
                        <TouchableRipple onPress={()=>{toggleTheme()}}>
                            <View style={{flexDirection: 'row',justifyContent: 'space-between',paddingVertical: 12,paddingHorizontal: 16,}}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={ isDarkTheme}/>
                                </View>
                                
                            </View>
                        </TouchableRipple>

                    </Drawer.Section>
                    
                </View>
            </DrawerContentScrollView>
             <Drawer.Section style={{marginBottom:15,borderTopColor:'black',borderTopWidth:1}}>
                <DrawerItem 
                    icon={({color, size}) => (
                    <Icon name="exit-to-app" color={color} size={size} />)}
                    label="Sign Out"
                    onPress={() => {Alert.alert("button press")}}
                />
            </Drawer.Section>
        </View>
    );
}