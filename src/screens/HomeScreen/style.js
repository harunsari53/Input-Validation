import { StyleSheet } from 'react-native'
import { colors } from '../../utils/colors';

const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: colors.aqua,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        color: colors.white,
    }

})

export default styles;