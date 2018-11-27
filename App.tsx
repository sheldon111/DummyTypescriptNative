import './ReactotronConfig'
import React from 'react'
import UserList from "./src/Components/UserList";
import { Provider } from 'mobx-react/native'
import userStore from "./src/Stores/userStore";
import locationStore from "./src/Stores/LocationStore";
import userConfigurationStore from "./src/Stores/UserConfigurationStore";
import { createStackNavigator, NavigationContainer} from 'react-navigation';
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

const RootStack: NavigationContainer = createStackNavigator(
    {
        UserList: UserList,
        // login: LoginScreen //login is reference, and LoginScreen is the reference to the component.
    },
    {
        initialRouteName: 'UserList',
    }
);
const AppContainer = createAppContainer(RootStack);

