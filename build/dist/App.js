import * as tslib_1 from "tslib";
import React from 'react';
import { StyleSheet } from 'react-native';
import UserList from "./src/Components/UserList";
import { Provider } from 'mobx-react/native';
import userStore from "./src/Stores/userStore";
import locationStore from "./src/Stores/LocationStore";
import userSettings from "./src/Models/UserSettings";
var App = /** @class */ (function (_super) {
    tslib_1.__extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (<Provider userStore={userStore} locationStore={locationStore} userSettings={userSettings}>
            <UserList />
        </Provider>);
    };
    return App;
}(React.Component));
export default App;
var styles = StyleSheet.create({
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
//# sourceMappingURL=App.js.map