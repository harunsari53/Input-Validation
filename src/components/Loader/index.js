import { ActivityIndicator, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'
import styles from './style'
import { colors } from '../../utils/colors'

const Loader = ({visible = false}) => {
  const {height, width} = useWindowDimensions();
  return (visible && (

    <View style={[styles.container, {height, width}]}>
      <View style={styles.loader}>
        <ActivityIndicator size='large' color={colors.aqua} />
        <Text style={styles.loaderText}>Loading...</Text>
      </View>
    </View>
    )
  )
}

export default React.memo(Loader)