import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import LoginThirdParty from '../../components/LoginThirdParty';
import Button from '../../components/Button';

const LoginWithEmail = () => {
  return (
    <View className="h-full bg-white">
      <Image source={require('../../assets/loginlogo.png')} />
      <View className="flex justify-between items-stretch">
        <View className="flex h-1/2">
          <View className="p-5 space-y-4 mt-4">
            <Text className="text-2xl text-blue-200 font-bold">
              Let’s <Text className="text-blue-100">Sign In </Text>
            </Text>
            <Text className="text-blue-100/50 text-xs">
              quis nostrud exercitation ullamco laboris nisi ut
            </Text>
          </View>
          <View className="px-7 space-y-4 my-5">
            <View className="flex flex-row items-center px-3 h-16 bg-light-200  rounded-xl">
              <Ionicons name="mail-outline" color="#A1A5C1" size={28} />
              <TextInput
                className=" bg-light-200 px-2"
                inputMode="email"
                placeholderTextColor="#A1A5C1"
                placeholder="Email"
              />
            </View>
            <View className="flex flex-row items-center px-3 h-16 bg-light-200  rounded-xl">
              <Feather name="lock" color="#A1A5C1" size={26} />
              <TextInput
                secureTextEntry
                className=" bg-light-200 px-2 w-1/2"
                inputMode="text"
                placeholderTextColor="#A1A5C1"
                placeholder="Password"
              />
            </View>
            <View className="flex flex-row items-center justify-between">
              <TouchableOpacity>
                <Text className="text-blue-300 text-xs font-semibold">
                  Forgot password?
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text className="text-blue-300 text-xs font-semibold">
                  Show password
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View className="w-full flex items-center justify-center">
            <Button onpress={() => {}} title="Login" css="w-[60%]" />
          </View>
        </View>
        <LoginThirdParty />
      </View>
    </View>
  );
};

export default LoginWithEmail;
