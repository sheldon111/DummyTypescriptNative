import './ReactotronConfig'
import React from 'react'
import {Provider} from 'mobx-react/native'

import MainMenu from './src/Components/MainMenu';
import UserList from "./src/Components/UserList";
import MemberLoginScreen from "./src/Components/MemberLoginScreen";
import InitialScreen from "./src/Components/InitialScreen";
import HeadMenuBtn from "./src/Components/HeadMenuBtn";
import ClubEntryScreen from "./src/Components/ClubEntryScreen";

import userStore from "./src/Stores/userStore";
import locationStore from "./src/Stores/LocationStore";
import userConfigurationStore from "./src/Stores/UserConfigurationStore";

import colours from "./src/Assets/Constants/colours";
import { FontAwesome } from '@expo/vector-icons';

import {
    createStackNavigator,
    NavigationContainer, NavigationScreenProp,
} from 'react-navigation';
import { createAppContainer } from '@react-navigation/native';



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

function navOptions(icon:string, navigation: NavigationScreenProp<any,any>, pageToLink: string, option: string, colour: string)
{
    return {
        headerTitle: <FontAwesome name={icon} size={24} color={colours.highlight}/>,
        headerTintColor: colours.highlight,
        headerRight: <HeadMenuBtn pageToLink={pageToLink} option={option} navigation={navigation}/>,
        headerStyle: {backgroundColor: colour},
    }
}

const RootStack: NavigationContainer = createStackNavigator(
    {
        InitialScreen: {
            screen: InitialScreen,
            navigationOptions: ({navigation}:{[Key:string]:any}) => navOptions("flag", navigation, "MainMenu", "navigate", colours.dark)
        },
        ClubEntry: {
            screen: ClubEntryScreen,
            navigationOptions: ({navigation}:{[Key:string]:any}) => navOptions("user", navigation, "MainMenu", "navigate", colours.dark)
        },
        UserList: {
            screen: UserList,
            navigationOptions: ({navigation}:{[Key:string]:any}) => navOptions("user", navigation, "MainMenu", "navigate", colours.dark)
        },
        MemberLogin: {
            screen: MemberLoginScreen,
            navigationOptions: ({navigation}:{[Key:string]:any}) => navOptions("user", navigation, "MainMenu", "navigate", colours.dark)
        },
        MainMenu: {
            screen: MainMenu,
            navigationOptions: ({navigation}:{[Key:string]:any}) => navOptions("user", navigation, "", "", colours.dark)
        },
    },
    {
        initialRouteName: 'InitialScreen',
    }
);

const AppContainer = createAppContainer(RootStack);