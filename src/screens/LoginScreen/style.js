import { StyleSheet } from 'react-native'
import { colors } from '../../utils/colors';

const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: colors.babypink,
        
    },
    title:{
        fontSize: 40,
        fontWeight: 'bold',
        color: colors.lemon,
        marginHorizontal: 15,
        shadowOpacity: 0.5,
        alignSelf: 'center'
    },
    mainText:{
        fontSize: 20,
        fontWeight: '500',
        color: colors.grey,
        marginVertical: 10,
        marginHorizontal: 15,
        alignSelf: 'center'

    },
    image:{
        width: 44,
        height: 44,
        marginLeft: 10,
    },
    inputContainer:{
        marginTop: 100,
    },  
    text:{
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.lemon
    },
    registerText: {
        fontSize: 23,
        fontWeight: '800',
        color: colors.lemon,
        textAlign: 'center',
        textDecorationLine: 'underline'
    },
    accountText: {
        fontSize: 13,
        fontWeight: '800',
        color: colors.lemon,
        shadowOpacity: 0.8,
        textAlign: 'center',
        marginTop: 25,
        marginBottom: 5,
    },
})

export default styles;