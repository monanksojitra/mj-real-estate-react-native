import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import TabBar from '../components/TabBar';
import Navbar from './Navbar';

const Tab = createBottomTabNavigator();
const BottomNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="main"
      tabBar={popes => <TabBar {...popes} />}
      screenOptions={{
        header: () => <Navbar />,
        headerTransparent: true,
      }}>
      <Tab.Screen name="main" component={Home} />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
