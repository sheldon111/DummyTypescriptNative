import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import {
    Image,
    KeyboardAvoidingView,StatusBar,
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
                <Image style={{flex: 1,height:'auto', width: '90%'}} resizeMode="contain" source={require('../Assets/Images/miscore.png')}  />
                <View style={[styles.clubInputContainer,{flex: 1, justifyContent: 'flex-start'}]}>
                    <View style={formats.inputDefaultContainer}>
                        <FontAwesome name="map-marker" size={20} color={colours.highlight}/>
                        <TextInput
                            style={formats.inputDefault}
                            placeholder="ENTER THE NAME OF YOUR CLUB"
                            placeholderTextColor={colours.white}
                            returnKeyType={"go"}
                            autoCorrect={false}
                            autoCapitalize="none"
                            blurOnSubmit={false}
                        />
                    </View>
                </View>
                <TouchableHighlight
                    onPress={() => this.onPressBtn('MemberLogin')}
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
    clubInputContainer: {
        padding: 10,
        marginBottom: 20,
        width: '90%',
        borderRadius: 5,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
});