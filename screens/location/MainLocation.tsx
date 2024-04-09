import {View, Text, Image} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import Serach from '../../components/Serach';
import Button from '../../components/Button';
import Title from '../../components/Title';

const MainLocation = ({navigation}: any) => {
  return (
    <View className="flex h-full">
      <Header css="mt-3" onSkip={() => navigation.navigate('propertyimg')} />

      <Title
        subtitle=" You can edit this later on your account setting."
        title="Add your"
        titleBold="location"
      />
      <View className="flex  items-center justify-center w-full">
        <Image source={require('../../assets/map.png')} />
      </View>
      <View className="px-5 mt-5">
        <Serach
          mainicon="location-on"
          navigationicon="chevron-right"
          placeholder="Enter your location"
        />
      </View>
      <View className="flex items-center justify-center mt-16 ">
        <View className="bg-white rounded-2xl h-1 w-[30%]">
          <View className="bg-blue-300 h-1 rounded-2xl w-[30%]"></View>
        </View>
        <Button
          title="Next"
          onpress={() => navigation.navigate('propertyimg')}
          css="mt-5 w-[60%]"
        />
      </View>
    </View>
  );
};

export default MainLocation;
