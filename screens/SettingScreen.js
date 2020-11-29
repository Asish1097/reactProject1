import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

function Setting({ navigation }) {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Setting Screen</Text>
                <Button title="go to home screen" onPress={() => navigation.navigate("Home")} />
            </View>
        );
}

export default Setting;
