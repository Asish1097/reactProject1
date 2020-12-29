import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

function Header({ navigation }) {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>BookmarkScreen</Text>
            </View>
        );
}

export default Header;
