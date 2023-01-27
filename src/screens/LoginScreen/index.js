import { Alert, Image, Pressable, SafeAreaView, ScrollView, Text, View, Keyboard } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Loader from '../../components/Loader'
import AsyncStorage from '@react-native-async-storage/async-storage'

const LoginScreen = ({navigation}) => {

  const onPressRegister = () => {
    navigation.navigate('RegisterScreen');
  };
  
    const [inputs, setInputs] = useState({
      fullname: '',
      phone: '',
      email: '',
      password: '',
    });
  
    const [errors, setErrors] = useState({});
  
    const [loading, setLoading] = useState(false)
  
    const validate = () => {
      Keyboard.dismiss();
      let valid = true 
      if (!inputs.email) {
        handleError('Please enter email', 'email')
        valid = false
      }
      if (!inputs.password) {
        valid = false
        handleError('Please enter password', 'password')
      }
      if (valid) {
        login();
      }
    };
  
      const login = () => {
        setLoading(true);
        setTimeout(async()=>{
          setLoading(false);
          let userData = await AsyncStorage.getItem("user");
          if(userData){
            userData = JSON.parse(userData);
            if(
              inputs.email == userData.email && 
              inputs.password == userData.password  
            ){
              AsyncStorage.setItem("user", JSON.stringify({...userData, loggedIn: true}))
              navigation.navigate("HomeScreen")
            }else {
            Alert.alert("Error", "Invalid Details")
          }
          }else{
            Alert.alert("Error", "User doesn't exist")
          }
        },1000)
      }
      
      const handleOnChange = (text, input) => {
        setInputs(prevState => ({...prevState, [input]: text}));
    };
  
    const handleError = (errorMessage, input) => {
      setErrors((prevState) => ({...prevState, [input]: errorMessage}))
    };
  
    return (
      <SafeAreaView style={styles.container}>
        <Loader visible={loading}/>
        
        <ScrollView style={styles.contentContainer}>

          <Text style={styles.title}>Login</Text>
          <Text style={styles.mainText}>Enter Your Login Details</Text>
  
          <View style={styles.inputContainer}>
    
            <Input 
              email
              autoCapitalize='none'
              keyboardType='email-address' 
              placeholder="Enter Your Email" 
              label="Email"   
              onChangeText = {text => handleOnChange(text, "email")}
              error={errors.email}
              onFocus={()=>{
                handleError(null, 'email')
              }}
            />
            <Input 
              password 
              placeholder="Enter Your Password" 
              label="Password" 
              onChangeText = {text => handleOnChange(text, "password")}
              error={errors.password}
              onFocus={()=>{
                handleError(null, 'password')
              }}
            />
  
            <Button title="Login" onPress={validate} />
  
            <Text style={styles.accountText}>Don't have an account?</Text>
            <Text onPress={onPressRegister} style={styles.registerText}> Register </Text>
  
          </View>
        </ScrollView>
      </SafeAreaView>
  )
}

export default React.memo(LoginScreen)
