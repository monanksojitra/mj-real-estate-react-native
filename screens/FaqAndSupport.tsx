import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Header';

import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const FaqAndSupport = () => {
  const [tab, setTab] = useState(false);
  return (
    <View className="h-full bg-white">
      <Header />
      <View className="p-5 space-y-4 mt-4">
        <Text className="text-2xl text-blue-100 font-bold">
          FAQ <Text className="text-blue-200">&</Text> Support
        </Text>
        <Text className="text-blue-100/50 text-xs">
          Find answer to your problem using this app.
        </Text>
      </View>
      <View className="px-10">
        <View className="flex flex-row items-center border-b border-blue-100/30 py-4">
          <View className="bg-blue-100 h-8 aspect-square rounded-full flex items-center justify-center">
            <Fontisto name="world-o" size={12} color="#fff" />
          </View>
          <Text className="text-blue-200 text-xs px-3">Visit our website</Text>
        </View>
        <View className="flex flex-row items-center border-b border-blue-100/30 py-4">
          <View className="bg-blue-100 h-8 aspect-square rounded-full flex items-center justify-center">
            <Fontisto name="email" size={12} color="#fff" />
          </View>
          <Text className="text-blue-200 text-xs px-3">Email us</Text>
        </View>
        <View className="flex flex-row items-center py-4">
          <View className="bg-blue-100 h-8 aspect-square rounded-full flex items-center justify-center">
            <FontAwesome name="sticky-note-o" size={12} color="#fff" />
          </View>
          <Text className="text-blue-200 text-xs px-3">Terms of service</Text>
        </View>
      </View>
      <View className="flex flex-row items-center p-4 m-5 bg-light-200 rounded-xl">
        <Fontisto name="search" size={20} color="#252B5C" />
        <TextInput
          className=" w-full px-2"
          inputMode="search"
          placeholderTextColor="#A1A5C1"
          placeholder="Try find “how to”"
        />
      </View>
      <View className="bg-light-200 flex flex-row items-center justify-around mx-5 h-14 rounded-xl">
        <TouchableOpacity
          onPress={() => setTab(!tab)}
          className={`${
            !tab ? 'bg-white' : ''
          } flex h-10 items-center justify-center flex-1 mx-3 rounded-3xl`}>
          <Text
            className={`${
              !tab ? 'text-blue-200 ' : 'text-blue-200/30'
            } text-xs`}>
            Buyer
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setTab(!tab)}
          className={`${
            tab ? 'bg-white' : ''
          } flex h-10 items-center justify-center flex-1 mx-3 rounded-3xl`}>
          <Text
            className={`${
              tab ? 'text-blue-200 ' : 'text-blue-200/30'
            } text-xs`}>
            Estate Agent
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FaqAndSupport;
