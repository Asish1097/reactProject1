import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

function Home({ navigation }) {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button title="go to details screen" onPress={() => navigation.navigate("Details")} />
            </View>
        );
}

export default Home;
