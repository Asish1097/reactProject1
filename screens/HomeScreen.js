import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, StatusBar } from 'react-native';
import { useTheme } from "@react-navigation/native";


function Home({ navigation }) {
    const { colors } = useTheme();
    const theme = useTheme();
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                {/* <StatusBar barStyle={theme.dark ? "light-content" : "dark-content"}/> */}
                <Text style={{color:colors.text}}>Home Screen</Text>
                <Button title="go to details screen" onPress={() => navigation.navigate("Details")} />
            </View>
        );
}

export default Home;
