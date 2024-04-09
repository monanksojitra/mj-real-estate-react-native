import {View, Text, Image} from 'react-native';
import React from 'react';
import {Title} from 'react-native-paper';
import Button from './Button';
type Props = {
  toggle: boolean;
  setAlert: () => void;
};
const Alert = ({toggle, setAlert}: Props) => {
  return (
    toggle && (
      <View className="h-screen w-screen absolute flex justify-end">
        <View className="bg-white h-[45%] rounded-tr-3xl rounded-tl-3xl flex items-center">
          <View className="h-1 bg-slate-600 rounded-3xl mt-5 w-[30%]" />
          <View className="mt-5">
            <Image source={require('../assets/Success.png')} />
          </View>
          <View className="flex gap-y-4">
            <Text className="text-2xl font-medium text-blue-200">
              Account{' '}
              <Text className="text-blue-300 font-bold">successfully</Text>{' '}
              created{' '}
            </Text>
            <Text className="text-blue-300 text-sm text-center">
              Lorem ipsum dolor sit amet, consectetur.
            </Text>
          </View>
          <View className="flex mt-5">
            <Button onpress={setAlert} title="Finish" />
          </View>
        </View>
      </View>
    )
  );
};

export default Alert;
