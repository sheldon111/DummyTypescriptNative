import './ReactotronConfig'
import React from 'react'
import { Provider } from 'mobx-react/native'

import MainMenu from './src/Components/MainMenu';
import UserList from "./src/Components/UserList";
import ClubEntryScreen from "./src/Components/ClubEntryScreen";
import InitialScreen from "./src/Components/InitialScreen";

import userStore from "./src/Stores/userStore";
import locationStore from "./src/Stores/LocationStore";
import userConfigurationStore from "./src/Stores/UserConfigurationStore";

import colours from "./src/Assets/Constants/colours";
import { FontAwesome } from '@expo/vector-icons';

import {
    createDrawerNavigator,
    createStackNavigator,
    NavigationContainer,
} from 'react-navigation';
import { createAppContainer } from '@react-navigation/native';

import {StyleSheet, TouchableOpacity} from "react-native";

export default class App extends React.Component<undefined, undefined>
{
  render()
  {
    return (
        <Provider userStore={userStore} locationStore={locationStore} userConfigurationStore={userConfigurationStore}>
            <AppContainer />
        </Provider>
    );
  }
}

const RootStack: NavigationContainer = createStackNavigator(
    {
        UserList: {
            screen: UserList,
            navigationOptions: ({navigation}) => ({
                headerTitle: <FontAwesome name="user" size={20} color={colours.highlight}/>,
                headerRight: <TouchableOpacity style={{paddingRight: 10}}>
                    <FontAwesome name="navicon" size={24} color={colours.highlight}/>
                </TouchableOpacity>,
                headerStyle: {backgroundColor: colours.dark},
            })
        },
        ClubEntry: {
            screen: ClubEntryScreen,
            navigationOptions: ({navigation}) => ({
                headerTitle: <FontAwesome name="user" size={20} color={colours.highlight}/>,
                headerRight: <TouchableOpacity style={{paddingRight: 10}} onPress={() => navigation.navigate('MainMenu')}>
                    <FontAwesome name="navicon" size={24} color={colours.highlight}/>
                </TouchableOpacity>,
                headerStyle: {backgroundColor: colours.dark},
                type: 'didBlur'
            })


        },//login is reference, and LoginScreen is the reference to the component.
        MainMenu: {
            screen: MainMenu,
            navigationOptions: ({navigation}) => ({
                headerTitle: <FontAwesome name="user" size={20} color={colours.highlight}/>,
                headerRight: <TouchableOpacity style={{paddingRight: 10}} onPress={() => navigation.goBack()}>
                    <FontAwesome name="navicon" size={24} color={colours.highlight}/>
                </TouchableOpacity>,
                headerStyle: {backgroundColor: colours.dark},
            })
        },
        InitialScreen: {
            screen: InitialScreen,
            navigationOptions: ({navigation}) => ({
                headerTitle: <FontAwesome name="flag" size={20} color={colours.highlight}/>,
                headerRight: <TouchableOpacity style={{paddingRight: 10}} onPress={() => navigation.navigate('MainMenu')}>
                    <FontAwesome name="navicon" size={24} color={colours.highlight}/>
                </TouchableOpacity>,
                headerStyle: {backgroundColor: colours.dark},
            })
        }
    },
    {
        initialRouteName: 'InitialScreen',
    }
);

const AppContainer = createAppContainer(RootStack);

