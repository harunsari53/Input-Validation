import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import {colors} from '../../utils/colors';



const Input = ({label, error, password, email, phone, fullname, onFocus = () => {}, ...props}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hidePassword, setHidePassword] = useState(password);
  const onEyepress = () => {
    setHidePassword(!hidePassword);
  };

  const ImageFunc = () => {
          
    if (fullname) {
     return <Image style={styles.image} source = {require('../../assets/profile.png')} />
    } else if (phone) {
      return <Image style={styles.image} source = {require('../../assets/phone.png')} />
    } else if (email) {
      return <Image style={styles.image} source = {require('../../assets/email.png')} />
    } else { 
      return <Image style={styles.image} source = {require('../../assets/password.png')} />
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer([error, isFocused])}>
        <ImageFunc />
        <TextInput
          secureTextEntry={hidePassword}
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          placeholderTextColor={colors.lightgrey}
          style={styles.inputText}
          {...props}
        />

        {password ? (
          <TouchableOpacity onPress={onEyepress}>
            <Image
              style={styles.image}
              source={
                hidePassword
                  ? require('../../assets/eye.png')
                  : require('../../assets/closedeye.png')
              }
            />
          </TouchableOpacity>
        ) : null}
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default React.memo(Input);
