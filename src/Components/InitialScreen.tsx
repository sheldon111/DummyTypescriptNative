import React, {Component} from 'react'
import { FontAwesome } from '@expo/vector-icons';
import {
    StatusBar,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    Image
} from 'react-native';


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
            <View style={formats.container}>
                <StatusBar
                    barStyle="light-content"
                />
                <Image style={{flex: 1,height:'auto', width: '90%'}} resizeMode="contain" source={require('../Assets/Images/miscore.png')}  />
                <View style={{justifyContent: 'flex-start', flex: 1}}>
                    <Text style={[styles.welcome, {fontFamily: 'Noteworthy'}]}>
                        Lets get scoring.{"\n"}
                        Select one of the following...
                    </Text>
                </View>
                <View>
                    <TouchableHighlight
                        onPress={() => this.onPressBtn('ClubEntry')}
                        underlayColor={"white"}
                        style={formats.basicBtnContainer}
                    >
                        <View style={formats.basicBtn}>
                            <FontAwesome name="user" size={20} color="white" style={{flex:1}}/>
                            <Text style={formats.basicBtnText}>YOU ARE A MEMBER OF A GOLF CLUB?  <FontAwesome name="arrow-right" size={20} color="white"/></Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => this.onPressBtn('TestPage')}
                        underlayColor={"white"}
                        style={formats.basicBtnContainer}
                    >
                        <View style={formats.basicBtn}>
                            <FontAwesome name="user" size={20} color="white" style={{flex:1}}/>
                            <Text style={formats.basicBtnText}>YOU HAVE A GUEST CODE?  <FontAwesome name="arrow-right" size={20} color="white"/></Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
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