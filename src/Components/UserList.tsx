import React from 'react'
import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import User from "../Models/User";
import {inject, observer} from 'mobx-react/native';
import UserStore from '../Stores/userStore';
import LocationStore from '../Stores/LocationStore';
import {toJS} from "mobx";
import locationStore from "../Stores/LocationStore";
import UserSettings from "../Models/UserSettings";

interface UserListPageProperties {
    userStore?: UserStore
    locationStore?: LocationStore
    userSettings?: UserSettings
}

@inject('userStore')
@inject('locationStore')
@inject('userSettings')
@observer
export default class UserList extends React.Component<UserListPageProperties> {
    getUser(index: number): User
    {
        // @ts-ignore
        return this.props.userStore.getUser(index);
    }


    async componentDidMount()
    {
        console.log(this.props.userSettings.applicationUrl);
        console.log(this.props.userSettings.webSocketEndPoint);
        console.log(this.props.userSettings.webSocketAddress);

    }

    async trackLocation()
    {
        await this.props.locationStore.findLocation();

        var location = await this.props.locationStore.locationData.pop();

        console.log(location);
        console.log(JSON.stringify(location));
        this.props.userSettings.ws.send(JSON.stringify(location));
    }


    getLocation():number
    {
        var time = 0;

        // if (this.props.locationStore.locationDataArray.length > 0)
        // {
        //     var trackedLocation = this.props.locationStore.locationDataArray.pop();
        //
        //     if(trackedLocation !== undefined)
        //     {
        //         console.log(trackedLocation);
        //         console.log(trackedLocation.locationData.timestamp);
        //         console.log(trackedLocation.locationData.coords);
        //         time = trackedLocation.time;
        //         console.log(time);
        //     }
        // }

        return time;
    }

    render() {
        return (
            <View style={styles.container}>
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
