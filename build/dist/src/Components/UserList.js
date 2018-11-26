import * as tslib_1 from "tslib";
import React from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import { toJS } from "mobx";
var UserList = /** @class */ (function (_super) {
    tslib_1.__extends(UserList, _super);
    function UserList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserList.prototype.getUser = function (index) {
        return this.props.userStore.getUser(index);
    };
    UserList.prototype.trackLocation = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.props.locationStore.processCurrentLocation(this.props.userConfigurationStore.ws.send)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserList.prototype.render = function () {
        var _this = this;
        return (<View style={styles.container}>
                <FlatList data={this.props.userStore.Users} renderItem={function (_a) {
            var item = _a.item;
            return <Text>{item.fullName}</Text>;
        }} keyExtractor={function (item, index) { return index.toString(); }}/>
                <FlatList data={this.props.locationStore.locationData.slice()} extraData={toJS(this.props.locationStore.locationData.slice())} renderItem={function (_a) {
            var item = _a.item;
            return <Text>{item.coordinates}</Text>;
        }} keyExtractor={function (item, index) { return index.toString(); }}/>
                <Button onPress={function () { return _this.trackLocation(); }} title={"click"}/>
                <Button onPress={function () { return _this.props.navigation.navigate('LoginScreen'); }} title={"Go to Login Screen"}/>
            </View>);
    };
    UserList = tslib_1.__decorate([
        inject('userStore'),
        inject('locationStore'),
        inject('userConfigurationStore'),
        observer
    ], UserList);
    return UserList;
}(React.Component));
export default UserList;
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
//# sourceMappingURL=UserList.js.map