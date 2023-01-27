import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'

const Button = ({title, onPress = () => {} }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

export default React.memo(Button);