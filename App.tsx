import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/Home';
import React from 'react';
import Splash from './screens/Splash';
import Intro from './screens/Intro';
import Login from './screens/Login';
import FaqAndSupport from './screens/FaqAndSupport';
import CreateAc from './screens/Signup/CreateAc';
import Otp from './screens/Signup/Otp';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="otp">
        <Stack.Screen name="splash" component={Splash} />
        <Stack.Screen name="intro" component={Intro} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="faqandsupport" component={FaqAndSupport} />
        <Stack.Screen name="createaccount" component={CreateAc} />
        <Stack.Screen name="otp" component={Otp} />

        <Stack.Screen name="home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
