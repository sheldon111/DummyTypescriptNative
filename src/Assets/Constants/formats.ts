import { StyleSheet, Platform } from 'react-native';
import colours from "./colours";

const formats = StyleSheet.create({
    container: {
        display: 'flex',
        height: '100%',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: colours.dark,
        justifyContent: 'space-between',
        flex: 1
    },
    inputDefaultContainer: {
        borderBottomColor: colours.white,
        borderBottomWidth: 2,
        width: '100%',
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputDefault: {
        color: colours.white,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        width: '100%',
        textAlign: 'left',
        fontSize: 18,
        flex: 1,

    },
    basicBtn: {
        backgroundColor: colours.highlight,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
        paddingBottom: 20,
        width: '90%',
        borderRadius: 5,
        margin: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    basicBtnText: {
        color: colours.white,
        textAlign: 'right',
        fontWeight: 'bold',
        fontSize: 20,
        flex: 1
    },
});

export default formats;