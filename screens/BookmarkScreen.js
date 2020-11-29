import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

function Bookmark({ navigation }) {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Bookmark Screen</Text>
                <Button title="go to home screen" onPress={() => navigation.navigate("Home")} />
            </View>
        );
}

export default Bookmark;
