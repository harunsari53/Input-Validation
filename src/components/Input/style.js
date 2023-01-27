import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';

const styles = StyleSheet.create({

    container:{
        marginBottom: 20,
    },
    label:{
        marginVertical: 5,
        marginHorizontal: 15,
        color: colors.grey,
        fontWeight: '900',
        fontStyle: 'italic',
    },
    inputContainer: ([error, isFocused]) => ({
            height: 55,
            backgroundColor: colors.aliceBlue,
            flexDirection: 'row',
            marginHorizontal: 15,
            borderWidth: 1,
            alignItems: 'center',
            borderRadius: 5,
            borderColor: error ? colors.red : isFocused ? colors.darkblue : colors.lightgrey,
    }),
    image:{
        width: 40,
        height: 40,
        marginLeft: 5,
        marginRight: 10,
    },
    inputText:{
        color: colors.grey,
        fontWeight: '700',
        flex: 1,
    },
    errorText:{
        color: colors.red,
        fontSize: 12,
        marginTop: 7,
        marginLeft: 15,

    },

})

export default styles;