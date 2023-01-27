import { SafeAreaView, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './style'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Button from '../../components/Button'

const HomeScreen = ({navigation}) => {

  const [userDetails, setUserDetails] = useState();

  useEffect(()=> {
    getUserDetails()
  }, []);

  const getUserDetails = async() => {
    const userData = await AsyncStorage.getItem("user");
    if (userData){
      setUserDetails(JSON.parse(userData))
    }
  }
  const logout = () => {
    AsyncStorage.setItem("user", JSON.stringify({...userDetails, loggedIn: false}))
    navigation.navigate("LoginScreen")
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Welcome {userDetails?.fullname} </Text>
      <View>
        <Button title="Logout" onPress={logout} />
      </View>
    </SafeAreaView>
  )
}

export default React.memo(HomeScreen)
