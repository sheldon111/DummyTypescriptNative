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
    UserList: UserList,
    login: LoginScreen //login is reference, and LoginScreen is the reference to the component.
}, {
    initialRouteName: 'UserList',
});
var AppContainer = createAppContainer(RootStack);
//# sourceMappingURL=App.js.map