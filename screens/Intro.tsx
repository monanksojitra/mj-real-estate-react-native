import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Button from '../components/Button';

const Intro = () => {
  const introList = [
    {
      id: 1,
      title: 'Find best place to stay in',
      impotent: 'good price',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.',
      img: require('../assets/img1.png'),
    },
    {
      id: 2,
      title: 'Fast sell your property in just ',
      impotent: 'one click ',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.',
      img: require('../assets/img2.png'),
    },
    {
      id: 3,
      title: 'Find perfect choice for your  ',
      impotent: 'future house',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.',
      img: require('../assets/img3.png'),
    },
  ];
  return (
    <View className="px-5 pt-5">
      <View className="flex flex-row  items-center justify-between">
        <View className="">
          <Image source={require('../assets/logo2.png')} />
        </View>
        <TouchableOpacity className="bg-light-100 h-10 px-7 flex items-center justify-center rounded-2xl">
          <Text className="text-xs tracking-widest text-black">skip</Text>
        </TouchableOpacity>
      </View>
      <View className="p-5 mt-10 w-[70%] space-y-5">
        <Text className="text-2xl font-medium text-black">
          Find best place to stay in{' '}
          <Text className="text-blue-100">good price</Text>
        </Text>
        <Text className="text-black/40 text-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.
        </Text>
      </View>
      <View className="relative flex items-center">
        <Image source={require('../assets/img1.png')} />
        <View className="absolute bottom-5 w-full flex items-center">
          <View className="bg-white rounded-2xl h-1 w-[20%]">
            <View className="bg-slate-300 h-1 rounded-2xl w-[40%]"></View>
          </View>
          <View>
            <View></View>
            <Button onpress={() => {}} title="Next" css="mt-4" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Intro;
