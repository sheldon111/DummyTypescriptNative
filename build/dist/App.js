import * as tslib_1 from "tslib";
import './ReactotronConfig';
import React from 'react';
import UserList from "./src/Components/UserList";
import { Provider } from 'mobx-react/native';
import userStore from "./src/Stores/userStore";
import locationStore from "./src/Stores/LocationStore";
import userConfigurationStore from "./src/Stores/UserConfigurationStore";
import { createStackNavigator } from 'react-navigation';
import { createAppContainer } from '@react-navigation/native';
import ClubEntryScreen from "./src/Components/ClubEntryScreen";
import colours from "./src/Assets/Constants/colours";
import { FontAwesome } from '@expo/vector-icons';
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
    },
    ClubEntry: {
        screen: ClubEntryScreen,
        navigationOptions: {
            headerTitle: <FontAwesome name="user" size={20} color={colours.highlight}/>,
            headerRight: <FontAwesome name="navicon" size={24} color={colours.highlight}/>,
        }
    },
}, {
    initialRouteName: 'UserList',
});
var AppContainer = createAppContainer(RootStack);
//# sourceMappingURL=App.js.map