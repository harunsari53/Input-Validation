// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RegisterScreen from './src/screens/RegisterScreen';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from './src/components/Loader';

const Stack = createNativeStackNavigator();

const App = () => {
  const [initialRouteName, setInitialRouteName] = React.useState('');
  React.useEffect(() => {
    setTimeout(authUser, 2000);
  }, []);
  const authUser = async () => {
    try {
      let userData = await AsyncStorage.getItem('user');
      if (userData) {
        userData = JSON.parse(userData);
        if (userData?.loggedIn) {
          setInitialRouteName('HomeScreen');
        } else {
          setInitialRouteName('LoginScreen');
        }
      } else {
        setInitialRouteName('RegisterScreen');
      }
    } catch (error) {
      setInitialRouteName('RegisterScreen');
    }
  };

  return ( 
    <NavigationContainer>
      {initialRouteName == '' ? (
        <Loader visible={true} />
      ) : (
        <>
          <Stack.Navigator initialRouteName={initialRouteName} screenOptions={{headerShown: false}}>
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
          </Stack.Navigator>
        </>
      )}
    </NavigationContainer>
  );
};

export default App;
