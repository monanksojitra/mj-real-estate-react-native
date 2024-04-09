import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Image} from 'react-native';
import Button from './Button';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {cn} from '../util/cn';
import {useNavigation} from '@react-navigation/native';
type Props = {
  css?: string;
};
const LoginThirdParty = ({css}: Props) => {
  const navigator = useNavigation();
  return (
    <View
      className={cn(
        'flex items-center justify-between mt-10 space-y-7 px-10',
        css,
      )}>
      <View className=" flex flex-row  items-center gap-x-1 justify-center h-10">
        <View className="h-[1px]  bg-slate-500/50  w-[50%]"></View>
        <Text className="text-slate-500  text-xs">OR</Text>
        <View className="h-[1px]  bg-slate-500/50  w-[50%]"></View>
      </View>
      <View className="flex flex-row items-center gap-x-2 justify-between w-full">
        <TouchableOpacity className="bg-slate-300/30 rounded-2xl h-20 flex items-center justify-center w-1/2">
          <AntDesign name="googleplus" size={36} color="red" />
        </TouchableOpacity>
        <TouchableOpacity className="bg-slate-300/30 rounded-2xl h-20 flex items-center justify-center w-1/2">
          <FontAwesome name="facebook" size={36} color="blue" />
        </TouchableOpacity>
      </View>
      <View className="flex flex-row items-center justify-center">
        <Text className="text-xs text-black">Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigator.navigate('createaccount')}>
          <Text className="text-blue-100">Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginThirdParty;
