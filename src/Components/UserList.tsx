import React from 'react'
import {FlatList, StyleSheet, Text, View} from 'react-native';
import User from "../Models/User";
import {inject, observer} from 'mobx-react/native';
import UserStore from '../Stores/userStore';

interface UserListPageProperties {
    userStore?: UserStore
}

@inject('userStore')
@observer
export default class UserList extends React.Component<UserListPageProperties> {
    getUser(index: number): User
    {
        // @ts-ignore
        return this.props.userStore.getNote(index);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>{this.getUser(1).fullName}</Text>
                <FlatList
                    data={this.props.userStore.Users}
                    renderItem={({item}) => <Text>{item.fullName}</Text>}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
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
