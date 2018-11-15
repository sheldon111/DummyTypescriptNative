import * as tslib_1 from "tslib";
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { inject, observer } from 'mobx-react/native';
var UserList = /** @class */ (function (_super) {
    tslib_1.__extends(UserList, _super);
    function UserList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserList.prototype.onDeleteItem = function (item) {
        // @ts-ignore
        this.props.userStore.deleteNote(item);
    };
    UserList.prototype.getUser = function (index) {
        console.log('In method');
        console.log(this.props.userStore);
        if (this.props.userStore !== undefined) {
            console.log('defined store');
            console.log(this.props.userStore.getNote(1));
        }
        // @ts-ignore
        return this.props.userStore.getNote(index);
    };
    UserList.prototype.render = function () {
        return (<View style={styles.container}>
                <Text>{this.getUser(1).fullName}</Text>
                <FlatList data={this.props.userStore.Users} renderItem={function (_a) {
            var item = _a.item;
            return <Text>{item.fullName}</Text>;
        }} keyExtractor={function (item, index) { return index.toString(); }}/>
            </View>);
    };
    UserList = tslib_1.__decorate([
        inject('userStore'),
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