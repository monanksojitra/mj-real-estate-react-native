import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import BottomNavigation from './screens/BottomNavigation';
import FaqAndSupport from './screens/FaqAndSupport';
import Intro from './screens/Intro';
import Login from './screens/Login';
import CreateAc from './screens/Signup/CreateAc';
import Otp from './screens/Signup/Otp';
import Splash from './screens/Splash';
import MainLocation from './screens/location/MainLocation';
import PaymentMethod from './screens/location/PaymentMethod';
import PropertyImg from './screens/location/PropertyImg';
import SearchLocation from './screens/location/SearchLocation';
import SelectProperty from './screens/location/SelectProperty';
import UserInfo from './screens/location/UserInfo';
import OTPVerification from './screens/Signup/Otp';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="splash">
        <Stack.Screen name="splash" component={Splash} />
        <Stack.Screen name="intro" component={Intro} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="faqandsupport" component={FaqAndSupport} />
        <Stack.Screen name="createaccount" component={CreateAc} />
        <Stack.Screen name="otpvarify" component={OTPVerification} />
        <Stack.Screen name="location" component={MainLocation} />
        <Stack.Screen name="searchlocation" component={SearchLocation} />
        <Stack.Screen name="propertyimg" component={PropertyImg} />
        <Stack.Screen name="selectproperty" component={SelectProperty} />
        <Stack.Screen name="paymentmethod" component={PaymentMethod} />
        <Stack.Screen name="userinfo" component={UserInfo} />

        <Stack.Screen name="home" component={BottomNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
