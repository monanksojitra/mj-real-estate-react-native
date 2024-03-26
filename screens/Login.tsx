import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import LoginWithEmail from './login/LoginWithEmail';
import LoginMain from './login/LoginMain';
const Stack = createStackNavigator();

const Login = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="loginwithemail" component={LoginWithEmail} />
      <Stack.Screen name="loginmain" component={LoginMain} />
    </Stack.Navigator>
  );
};

export default Login;
