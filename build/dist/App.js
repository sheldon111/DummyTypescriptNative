import * as tslib_1 from "tslib";
import './ReactotronConfig';
import React from 'react';
import { Provider } from 'mobx-react/native';
import MainMenu from './src/Components/MainMenu';
import UserList from "./src/Components/UserList";
import ClubEntryScreen from "./src/Components/ClubEntryScreen";
import InitialScreen from "./src/Components/InitialScreen";
import userStore from "./src/Stores/userStore";
import locationStore from "./src/Stores/LocationStore";
import userConfigurationStore from "./src/Stores/UserConfigurationStore";
import colours from "./src/Assets/Constants/colours";
import { FontAwesome } from '@expo/vector-icons';
import { createStackNavigator, } from 'react-navigation';
import { createAppContainer } from '@react-navigation/native';
import { TouchableOpacity } from "react-native";
var App = /** @class */ (function (_super) {
    tslib_1.__extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (<Provider userStore={userStore} locationStore={locationStore} userConfigurationStore={userConfigurationStore}>
            <AppContainer />
        </Provider>);
    };
    return App;
}(React.Component));
export default App;
var RootStack = createStackNavigator({
    UserList: {
        screen: UserList,
        navigationOptions: function (_a) {
            var navigation = _a.navigation;
            return ({
                headerTitle: <FontAwesome name="user" size={20} color={colours.highlight}/>,
                headerRight: <TouchableOpacity style={{ paddingRight: 10 }}>
                    <FontAwesome name="navicon" size={24} color={colours.highlight}/>
                </TouchableOpacity>,
                headerStyle: { backgroundColor: colours.dark },
            });
        }
    },
    ClubEntry: {
        screen: ClubEntryScreen,
        navigationOptions: function (_a) {
            var navigation = _a.navigation;
            return ({
                headerTitle: <FontAwesome name="user" size={20} color={colours.highlight}/>,
                headerRight: <TouchableOpacity style={{ paddingRight: 10 }} onPress={function () { return navigation.navigate('MainMenu'); }}>
                    <FontAwesome name="navicon" size={24} color={colours.highlight}/>
                </TouchableOpacity>,
                headerStyle: { backgroundColor: colours.dark },
                type: 'didBlur'
            });
        }
    },
    MainMenu: {
        screen: MainMenu,
        navigationOptions: function (_a) {
            var navigation = _a.navigation;
            return ({
                headerTitle: <FontAwesome name="user" size={20} color={colours.highlight}/>,
                headerRight: <TouchableOpacity style={{ paddingRight: 10 }} onPress={function () { return navigation.goBack(); }}>
                    <FontAwesome name="navicon" size={24} color={colours.highlight}/>
                </TouchableOpacity>,
                headerStyle: { backgroundColor: colours.dark },
            });
        }
    },
    InitialScreen: {
        screen: InitialScreen,
        navigationOptions: function (_a) {
            var navigation = _a.navigation;
            return ({
                headerTitle: <FontAwesome name="flag" size={20} color={colours.highlight}/>,
                headerRight: <TouchableOpacity style={{ paddingRight: 10 }} onPress={function () { return navigation.navigate('MainMenu'); }}>
                    <FontAwesome name="navicon" size={24} color={colours.highlight}/>
                </TouchableOpacity>,
                headerStyle: { backgroundColor: colours.dark },
            });
        }
    }
}, {
    initialRouteName: 'InitialScreen',
});
var AppContainer = createAppContainer(RootStack);
//# sourceMappingURL=App.js.map