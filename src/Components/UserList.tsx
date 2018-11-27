import React from 'react'
import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import User from "../Models/User";
import {inject, observer} from 'mobx-react/native';
import UserStore from '../Stores/userStore';
import LocationStore from '../Stores/LocationStore';
import {toJS} from "mobx";
import locationStore from "../Stores/LocationStore";
import UserConfigurationStore from '../Stores/UserConfigurationStore';
import {NavigationScreenProp} from "react-navigation";
import userConfigurationStore from "../Stores/UserConfigurationStore";

interface UserListPageProperties {
    userStore?: UserStore
    locationStore?: LocationStore
    userConfigurationStore?: UserConfigurationStore
    navigation: NavigationScreenProp<any, any>
}

@inject('userStore')
@inject('locationStore')
@inject('userConfigurationStore')
@observer
export default class UserList extends React.Component<UserListPageProperties> {
    getUser(index: number): User
    {
        return this.props.userStore.getUser(index);
    }

    async trackLocation()
    {
        await this.props.locationStore.processCurrentLocation();
    }

    render() {
        return (
            <View>
                <FlatList
                    data={this.props.userStore.Users}
                    renderItem={({item}) => <Text>{item.fullName}</Text>}
                    keyExtractor={(item, index) => index.toString()}
                />
                <FlatList
                    data={this.props.locationStore.locationData.slice()}
                    extraData={toJS(this.props.locationStore.locationData.slice())}
                    renderItem={({item}) => <Text>{item.coordinates}</Text>}
                    keyExtractor={(item, index) => index.toString()}
                />
                <Button onPress={() => this.trackLocation()} title={"click"}/>
                <Button onPress={() => userConfigurationStore.newConnection(userConfigurationStore.webSocketAddress)} title={"Create new socket connection"}/>
                <Button onPress={() => this.props.navigation.navigate('LoginScreen')} title={"Go to Login Screen"}/>
            </View>
        );
    }
}
