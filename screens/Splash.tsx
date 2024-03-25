import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {Children} from 'react';
import Button from '../components/Button';

const Splash = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../assets/splash.png')}
      className="h-screen flex items-center justify-center  ">
      <View className="  flex items-center justify-between h-full w-full bg-slate-200/40">
        <View className="flex items-center justify-center h-[85%]">
          <Image
            source={require('../assets/logo.png')}
            className="rounded-full h-28"
          />
          <Text className="text-4xl font-bold text-white text-center">
            Rise Real Estate
          </Text>
        </View>

        <View className="flex items-center justify-center gap-y-5 ">
          <Button
            onpress={() => navigation.navigate('intro')}
            title="let’s start"
            css=""
          />
          <View className="flex items-center justify-center">
            <Text className="text-white text-xs">Made with love</Text>
            <Text className="text-white text-xs">v.1.0</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Splash;
