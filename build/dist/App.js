import * as tslib_1 from "tslib";
import './ReactotronConfig';
import React from 'react';
import { Provider } from 'mobx-react/native';
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
import { createStackNavigator, } from 'react-navigation';
import { createAppContainer } from '@react-navigation/native';
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
function navOptions(icon, navigation, pageToLink, option, colour) {
    return {
        headerTitle: <FontAwesome name={icon} size={24} color={colours.highlight}/>,
        headerTintColor: colours.highlight,
        headerRight: <HeadMenuBtn pageToLink={pageToLink} option={option} navigation={navigation}/>,
        headerStyle: { backgroundColor: colour },
    };
}
var RootStack = createStackNavigator({
    InitialScreen: {
        screen: InitialScreen,
        navigationOptions: function (_a) {
            var navigation = _a.navigation;
            return navOptions("flag", navigation, "MainMenu", "navigate", colours.dark);
        }
    },
    ClubEntry: {
        screen: ClubEntryScreen,
        navigationOptions: function (_a) {
            var navigation = _a.navigation;
            return navOptions("user", navigation, "MainMenu", "navigate", colours.dark);
        }
    },
    UserList: {
        screen: UserList,
        navigationOptions: function (_a) {
            var navigation = _a.navigation;
            return navOptions("user", navigation, "MainMenu", "navigate", colours.dark);
        }
    },
    MemberLogin: {
        screen: MemberLoginScreen,
        navigationOptions: function (_a) {
            var navigation = _a.navigation;
            return navOptions("user", navigation, "MainMenu", "navigate", colours.dark);
        }
    },
    MainMenu: {
        screen: MainMenu,
        navigationOptions: function (_a) {
            var navigation = _a.navigation;
            return navOptions("user", navigation, "", "", colours.dark);
        }
    },
}, {
    initialRouteName: 'InitialScreen',
});
var AppContainer = createAppContainer(RootStack);
//# sourceMappingURL=App.js.map