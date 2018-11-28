import React, {Component} from 'react'
import { FontAwesome } from '@expo/vector-icons';
import {
    KeyboardAvoidingView, ScrollView, StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    View
} from 'react-native';

import colours from "../Assets/Constants/colours";
import formats from "../Assets/Constants/formats";

import {NavigationScreenProp} from "react-navigation";

interface ClubEntryProperties{
    navigation: NavigationScreenProp<any, any>
}

export default class ClubEntryScreen extends React.Component<ClubEntryProperties>{


    onPressBtn(navPage: string)
    {
        this.props.navigation.navigate(navPage)
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={formats.container}>
                <StatusBar
                    barStyle="light-content"
                />
                <Text style={styles.welcome}>*Insert Golf Club Data*</Text>
                <ScrollView style={styles.loginContainer} keyboardShouldPersistTaps='handled' contentContainerStyle={styles.loginContainer}>
                    <View style={formats.inputDefaultContainer}>
                        <FontAwesome name="user" size={20} color={colours.highlight}/>
                        <TextInput
                            style={formats.inputDefault}
                            placeholder="USERNAME"
                            placeholderTextColor={colours.white}
                            returnKeyType={"next"}
                            autoCorrect={false}
                            autoCapitalize="none"
                            onSubmitEditing={() => {this.passwordInput.focus()}}
                            blurOnSubmit={false}
                        />
                    </View>
                    <View style={formats.inputDefaultContainer}>
                        <FontAwesome name="lock" size={20} color={colours.highlight}/>
                        <TextInput
                            style={formats.inputDefault}
                            ref={(input) => {this.passwordInput = input;}}
                            placeholder="PASSWORD"
                            placeholderTextColor={colours.white}
                            returnKeyType={"go"}
                            onChangeText={(text) => this.setState({text})}
                            secureTextEntry
                        />
                    </View>
                </ScrollView>
                <TouchableHighlight
                    onPress={() => this.onPressBtn('TestPage')}
                    underlayColor={"white"}
                    style={formats.basicBtnContainer}
                >
                    <View style={formats.basicBtn}>
                        <FontAwesome name="lock" size={20} color="white" style={{flex:1}}/>
                        <Text style={formats.basicBtnText}>SUBMIT <FontAwesome name="arrow-right" size={20} color="white"/></Text>
                    </View>
                </TouchableHighlight>
            </KeyboardAvoidingView>
        );
    }
}

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