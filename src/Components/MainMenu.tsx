import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import {
    StatusBar,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from 'react-native';

import colours from "../Assets/Constants/colours";
import formats from "../Assets/Constants/formats";

import {NavigationScreenProp} from "react-navigation";

interface MenuScreenProperties{
    navigation: NavigationScreenProp<any, any>
}

export default class MenuScreen extends React.Component<MenuScreenProperties>{

    onPressBtn(navPage: string)
    {
        this.props.navigation.navigate(navPage)
    }

    render() {
        return (
            <View style={formats.container}>
                <StatusBar
                    barStyle="light-content"
                />
                <View>
                    <Text style={styles.welcome}>*Insert User's Name*</Text>
                    <Text style={{fontSize: 16, color: '#fff', textAlign: 'center', fontWeight: 'bold'}}>Menu</Text>
                </View>
                <View style={[styles.menuContainer, formats.column]}>
                    <View style={[formats.row]}>
                        <TouchableHighlight
                            onPress={() => this.onPressBtn('UserList')}
                            underlayColor={colours.darkUnderlay}
                            style={[styles.menuItemContainer]}
                        >
                            <View style={[styles.menuItem, formats.column]}>
                                <FontAwesome name="pie-chart" size={20} color={colours.highlight} style={{textAlign: 'center'}}/>
                                <Text style={styles.menuItemText}>USER LIST</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={() => this.onPressBtn('MemberLogin')}
                            underlayColor={colours.darkUnderlay}
                            style={[styles.menuItemContainer]}
                        >
                            <View style={[styles.menuItem, formats.column]}>
                                <FontAwesome name="map-marker" size={20} color={colours.highlight}/>
                                <Text style={styles.menuItemText}>MEMBER LOGIN</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <View style={[formats.row]}>
                        <TouchableHighlight
                            onPress={() => this.onPressBtn('UserList')}
                            underlayColor={colours.darkUnderlay}
                            style={[styles.menuItemContainer]}
                        >
                            <View style={[styles.menuItem, formats.column]}>
                                <FontAwesome name="list-ol" size={20} color={colours.highlight} style={{textAlign: 'center'}}/>
                                <Text style={styles.menuItemText}>LEADERBOARDS</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={() => this.onPressBtn('ClubEntry')}
                            underlayColor={colours.darkUnderlay}
                            style={[styles.menuItemContainer]}
                        >
                            <View style={[styles.menuItem, formats.column]}>
                                <FontAwesome name="exclamation-circle" size={20} color={colours.highlight}/>
                                <Text style={styles.menuItemText}>NOTIFICATIONS</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <View style={[formats.row]}>
                        <TouchableHighlight
                            onPress={() => this.onPressBtn('UserList')}
                            underlayColor={colours.darkUnderlay}
                            style={[styles.menuItemContainer]}
                        >
                            <View style={[styles.menuItem, formats.column]}>
                                <FontAwesome name="heart" size={20} color={colours.highlight} style={{textAlign: 'center'}}/>
                                <Text style={styles.menuItemText}>MY COURSES</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={() => this.onPressBtn('ClubEntry')}
                            underlayColor={colours.darkUnderlay}
                            style={[styles.menuItemContainer]}
                        >
                            <View style={[styles.menuItem, formats.column]}>
                                <FontAwesome name="question-circle" size={20} color={colours.highlight}/>
                                <Text style={styles.menuItemText}>HANDICAP</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
                <TouchableHighlight
                    onPress={() => this.onPressBtn('TestPage')}
                    underlayColor={"white"}
                    style={formats.basicBtnContainer}
                >
                    <View style={formats.basicBtn}>
                        <Text style={formats.basicBtnText}>START SCORING <FontAwesome name="arrow-right" size={20} color="white"/></Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    welcome: {
        fontSize: 28,
        textAlign: 'center',
        marginTop: 50,
        color: '#fff',
    },
    menuContainer: {
        padding: 10,
        marginBottom: 20,
        width: '100%',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    menuRow: {
        flexDirection: 'row',
        width: '100%',
        marginLeft: '2%',
        marginRight: '2%',
        marginTop: '1%',
        marginBottom: '1%',

    },
    menuItemContainer: {
        padding: 15,
        backgroundColor: colours.dark,
        borderColor: colours.highlight,
        borderWidth: 1,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '46%',
        margin: '2%',

    },
    menuItem: {
        color: colours.white,
        padding: 5,
        width: '100%',
        alignItems: 'center'
    },
    menuItemText: {
        color: colours.white,
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10
    },
});