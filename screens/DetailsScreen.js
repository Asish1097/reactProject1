import React, { Component } from 'react';
import { Button,StyleSheet, Text, View } from 'react-native';

function Details ({navigation}) {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen Screen</Text>
                <Button title="go back to home" onPress={() => navigation.navigate("Home")} />

            </View>
        );
}

export default Details;