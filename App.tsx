import React from 'react'
import {StyleSheet} from 'react-native';
import UserList from "./src/Components/UserList";
import { Provider } from 'mobx-react/native'
import userStore from "./src/Stores/userStore";
import locationStore from "./src/Stores/LocationStore";
import userSettings from "./src/Models/UserSettings";

export default class App extends React.Component<undefined, undefined> {

  render() {
    return (
        <Provider userStore={userStore} locationStore={locationStore} userSettings={userSettings}>
            <UserList />
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
