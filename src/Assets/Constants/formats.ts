import {StyleSheet, Platform, Dimensions} from 'react-native';
import colours from "./colours";

const win = Dimensions.get('window');

const formats = StyleSheet.create({
    container: {
        display: 'flex',
        height: '100%',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: colours.primary,
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
    basicBtnContainer: {
        width: '90%',
        alignItems: 'center',
        margin: 20,
        marginTop: 0,
        borderRadius: 5
    },
    basicBtn: {
        backgroundColor: colours.highlight,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
        paddingBottom: 20,
        width: '100%',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    basicBtnText: {
        color: colours.white,
        textAlign: 'right',
        fontWeight: 'bold',
        fontSize: 14,
        flex: 10,
    },
    overlay: {
        position: 'absolute',
        flex: 1,
        left: 0,
        top: 0,
        opacity: 0.6,
        backgroundColor: colours.primary,
        width: '100%'
    },
    column: {
        flexDirection: 'column',
    },
    row:{
        flexDirection: 'row'
    },
});

export default formats;