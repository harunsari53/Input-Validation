import {Alert, Keyboard, SafeAreaView, ScrollView, Text, View} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Loader from '../../components/Loader';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RegisterScreen = ({navigation}) => {

  const onPressLogin = () => {
    navigation.navigate('LoginScreen');
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
    }else if (!inputs.email.match(/\S+@\S+\.\S+/)){
      handleError('Please enter valid email', 'email')
      valid = false
    }
    
    if (!inputs.fullname) {
      handleError('Please enter fullname', 'fullname')
      valid = false
    }
    if (!inputs.phone) {
      handleError('Please enter phone', 'phone')
      valid = false
    }
    if (!inputs.password) {
      handleError('Please enter password', 'password')
      valid = false
    }else if (inputs.password.length<5){
      handleError('Password must be min 5 digit', 'password')
      valid = false
    }
    if (valid) {
      register();
    }
  };

    const register = () => {
      setLoading(true);
      setTimeout(()=>{
        setLoading(false);
        try {
          AsyncStorage.setItem("user",JSON.stringify(inputs));
          navigation.navigate("LoginScreen")
        } catch (error) {
          Alert.alert("Error", "Something went wrong")
        }
      }, 1000)
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

        <Text style={styles.title}>Register</Text>
        <Text style={styles.mainText}>Enter Your Details to Register</Text>

        <View style={styles.inputContainer}>

          <Input 
            fullname
            placeholder="Enter Your Fullname" 
            label="Fullname" 
            onChangeText = {text => handleOnChange(text, "fullname")}
            error={errors.fullname}
            onFocus={()=>{
              handleError(null, 'fullname')
            }}
          />
          <Input
            phone
            keyboardType="numeric"
            placeholder="Enter Your Phone Number"
            label="Phone"
            onChangeText = {text => handleOnChange(text, "phone")}
            error={errors.phone}
            onFocus={()=>{
              handleError(null, 'phone')
            }}
          />
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
            autoCapitalize='none'
            placeholder="Enter Your Password" 
            label="Password" 
            onChangeText = {text => handleOnChange(text, "password")}
            error={errors.password}
            onFocus={()=>{
              handleError(null, 'password')
            }}
          />

          <Button title="Register" onPress={validate} />

          <Text style={styles.accountText}>Already have an account?</Text>
          <Text onPress={onPressLogin} style={styles.loginText}> Login </Text>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(RegisterScreen);
