var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { inject, observer } from 'mobx-react/native';
let UserList = class UserList extends React.Component {
    onDeleteItem(item) {
        // @ts-ignore
        this.props.userStore.deleteNote(item);
    }
    render() {
        return (<View style={styles.container}>
                <FlatList 
        // @ts-ignore
        data={this.props.userStore.users} renderItem={({ item }) => <Text>{item.firstName + ' ' + item.lastName}</Text>}/>

                <Text style={styles.welcome}>Welcome to React Native!</Text>
                <Text style={styles.instructions}>To get started, edit App.js</Text>
            </View>);
    }
};
UserList = __decorate([
    inject('userStore'),
    observer
], UserList);
export default UserList;
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
