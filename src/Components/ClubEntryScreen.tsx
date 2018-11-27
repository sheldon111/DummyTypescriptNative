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

export default class ClubEntryScreen extends Component{


    onPressBtn()
    {
        Alert.alert('this will eventually need to submit')
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={formats.container}>
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
                    onPress={this.onPressBtn}
                    underlayColor={"white"}
                    style={{width: '100%'}}
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