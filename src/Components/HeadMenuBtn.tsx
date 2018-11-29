import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import {
    Text,
    TouchableOpacity
} from 'react-native';

import colours from "../Assets/Constants/colours";
import {NavigationScreenProp} from "react-navigation";

interface MenuBtnProperties{
    navigation: NavigationScreenProp<any, any>,
    pageToLink: string,
    option: string
}

export default class HeadMenuBtn extends React.Component<MenuBtnProperties>{
    render() {
        if(this.props.option === "navigate") {
            return (
                <TouchableOpacity style={{paddingRight: 10}}
                                  onPress={() => this.props.navigation.navigate(this.props.pageToLink)}>
                    <FontAwesome name="navicon" size={24} color={colours.highlight}/>
                </TouchableOpacity>);
        }else{
            return (
                <TouchableOpacity style={{paddingRight: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}
                                  onPress={() => this.props.navigation.goBack()}>
                    <Text style={{color:colours.highlight, fontSize: 18}}>Logout  </Text>
                    <FontAwesome name="sign-out" size={24} color={colours.highlight}/>
                </TouchableOpacity>);
        }
    }
}