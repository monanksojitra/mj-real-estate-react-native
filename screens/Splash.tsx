import {View, Text, ImageBackground, Image} from 'react-native';
import React from 'react';

const Splash = () => {
  return (
    <ImageBackground
      source={require('../assets/splash.png')}
      className="h-screen flex items-center justify-center ">
      <View className="  flex items-center justify-center shadowstyle">
        <Image
          source={require('../assets/logo.png')}
          className="rounded-full "
        />
        <Text>Rise Real Estate</Text>
      </View>
    </ImageBackground>
  );
};

export default Splash;
