import { StyleSheet } from 'react-native'
import { colors } from '../../utils/colors';

const styles = StyleSheet.create({

    container:{
        height: 55,
        width: 360,
        backgroundColor: colors.dodgerblue,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    text:{
        color: colors.white,
        fontSize: 18,
        fontWeight: 'bold',
    },

})

export default styles;