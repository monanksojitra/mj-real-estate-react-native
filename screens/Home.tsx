import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const Home = () => {
  return (
    <SafeAreaView>
      <View className="bg-sky-600 h-screen">
        <Text className="text-3xl text-red-700">Home</Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
