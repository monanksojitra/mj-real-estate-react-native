import {View, Text, Image} from 'react-native';
import React from 'react';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Navbar = () => {
  return (
    <View className="flex flex-row items-center justify-between p-4">
      <View className="flex flex-row items-center px-3 h-14 gap-x-2 bg-white rounded-full">
        <SimpleLineIcons name="location-pin" size={24} color="black" />
        <Text className="text-xs text-blue-200">Jakarta, Indonesia</Text>
        <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
      </View>
      <View className="flex gap-x-3 flex-row items-center justify-center">
        <View className="h-14 aspect-square relative flex items-center justify-center rounded-full bg-white border border-primary">
          <Fontisto name="bell" size={24} color="black" />
          <View className="h-2 absolute top-4 right-4 aspect-square rounded-full bg-[#FD5F4A]" />
        </View>
        <View className="h-14 aspect-square relative flex items-center justify-center rounded-full bg-white border border-[#DFDFDF]">
          <Image
            source={require('../assets/avtar.jpeg')}
            className="h-[95%] aspect-square rounded-full"
          />
        </View>
      </View>
    </View>
  );
};

export default Navbar;
