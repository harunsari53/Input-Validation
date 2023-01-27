import { Dimensions, StyleSheet, useWindowDimensions } from 'react-native'
import { colors } from '../../utils/colors'

const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        zIndex: 10,
        backgroundColor: colors.lightgrey,
        justifyContent: 'center',
        flex: 1,
    },
    loader:{
        height: 70,
        backgroundColor: colors.white,
        marginHorizontal: 50,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    loaderText:{
        marginRight: 10,
        fontSize: 16,
    }
})

export default styles;