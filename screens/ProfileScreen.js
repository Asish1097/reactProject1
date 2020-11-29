import React, { Component } from 'react';
import { Button, StyleSheet, Text, Alert, View } from 'react-native';

function Profile({ navigation }) {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Profile Screen</Text>
                <Button title="go to explore screen" onPress={() => navigation.navigate("Explore")} />
            </View>
        );
}

export default Profile;
