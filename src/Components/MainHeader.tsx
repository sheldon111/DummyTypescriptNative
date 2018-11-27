import React, {Component} from 'react'
import { FontAwesome } from '@expo/vector-icons';
import {
    Alert,
    KeyboardAvoidingView, ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    View
} from 'react-native';

import colours from "../Assets/Constants/colours";
import formats from "../Assets/Constants/formats";
import {Header} from "react-navigation";

const MainHeader = props => {
    return (
        <View style={{height: 60}} >
            <Header

            />
        </View>
    );
};

export default MainHeader;

const styles = StyleSheet.create({
    welcome: {
        fontSize: 28,
        textAlign: 'center',
        marginTop: 50,
        color: '#fff',
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    loginContainer: {
        padding: 10,
        marginBottom: 20,
        width: '100%',
        borderRadius: 5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
});