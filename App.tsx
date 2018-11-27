import './ReactotronConfig'
import React from 'react'
import UserList from "./src/Components/UserList";
import { Provider } from 'mobx-react/native'
import userStore from "./src/Stores/userStore";
import MainHeader from "./src/Components/MainHeader";
import locationStore from "./src/Stores/LocationStore";
import userConfigurationStore from "./src/Stores/UserConfigurationStore";
import {createStackNavigator, NavigationContainer} from 'react-navigation';
import { createAppContainer } from '@react-navigation/native';
import ClubEntryScreen from "./src/Components/ClubEntryScreen";
import colours from "./src/Assets/Constants/colours";
import { FontAwesome } from '@expo/vector-icons';

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
        },
        ClubEntry: {
            screen: ClubEntryScreen,
            navigationOptions:{
                headerTitle: <FontAwesome name="user" size={20} color={colours.highlight}/>,
                headerRight:  <FontAwesome name="navicon" size={24} color={colours.highlight}/>,

            }


        }, //login is reference, and LoginScreen is the reference to the component.
    },
    {
        initialRouteName: 'UserList',
    }
);
const AppContainer = createAppContainer(RootStack);

