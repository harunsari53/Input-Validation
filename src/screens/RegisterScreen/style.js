import { StyleSheet } from 'react-native'
import { colors } from '../../utils/colors';

const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: colors.lemon,
    },
    title:{
        fontSize: 40,
        fontWeight: 'bold',
        color: colors.coral,
        marginHorizontal: 15,
        shadowOpacity: 0.5,
        alignSelf: 'center'
    },
    mainText:{
        fontSize: 20,
        fontWeight: '400',
        color: colors.grey,
        marginVertical: 10,
        marginHorizontal: 15,
    },
    contentContainer:{
        paddingTop: 50,
    },
    inputContainer: {
        marginVertical: 20,
    },
    loginText: {
        fontSize: 23,
        fontWeight: '800',
        color: colors.coral,
        textAlign: 'center',
        textDecorationLine: 'underline'
    },
    accountText: {
        fontSize: 13,
        fontWeight: '800',
        color: colors.coral,
        shadowOpacity: 0.5,
        textAlign: 'center',
        marginTop: 25,
        marginBottom: 5,
    },
    loader:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }

})

export default styles;