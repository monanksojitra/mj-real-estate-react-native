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
import MainLocation from './screens/location/MainLocation';
import SearchLocation from './screens/location/SearchLocation';
import PropertyImg from './screens/location/PropertyImg';
import SelectProperty from './screens/location/SelectProperty';
import PaymentMethod from './screens/location/PaymentMethod';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="paymentmethod">
        <Stack.Screen name="splash" component={Splash} />
        <Stack.Screen name="intro" component={Intro} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="faqandsupport" component={FaqAndSupport} />
        <Stack.Screen name="createaccount" component={CreateAc} />
        <Stack.Screen name="otp" component={Otp} />
        <Stack.Screen name="location" component={MainLocation} />
        <Stack.Screen name="searchlocation" component={SearchLocation} />
        <Stack.Screen name="propertyimg" component={PropertyImg} />
        <Stack.Screen name="selectproperty" component={SelectProperty} />
        <Stack.Screen name="paymentmethod" component={PaymentMethod} />

        <Stack.Screen name="home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
