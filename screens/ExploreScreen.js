import React, { Component } from 'react';
import { Button, StyleSheet, Text, Alert, View } from 'react-native';

function Explore({ navigation }) {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Explore Screen</Text>
                <Button title="go to profile screen" onPress={() => navigation.navigate('Profile')} />
            </View>
        );
}

export default Explore;
