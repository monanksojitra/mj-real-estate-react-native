import {View, Text, Image} from 'react-native';
import React from 'react';
import Button from '../../components/Button';
import LoginThirdParty from '../../components/LoginThirdParty';
import Title from '../../components/Title';

const LoginMain = ({navigation}: any) => {
  return (
    <View className="h-full p-3">
      <View className="flex flex-row gap-3 pt-2 flex-wrap items-center justify-center">
        <Image source={require('../../assets/login1.png')} />
        <Image source={require('../../assets/login2.png')} />
        <Image source={require('../../assets/login3.png')} />
        <Image source={require('../../assets/login4.png')} />
      </View>
      <View className="px-5">
        <Text className="text-2xl text-black font-bold">
          <Text className="text-blue-100"></Text>
        </Text>
        <Title title="Ready to" titleBold="explore?" css="p-0" />
        <Button
          onpress={() => navigation.navigate('loginwithemail')}
          icon="mail"
          title="Continue with Email"
          css="mt-10"
        />
        <LoginThirdParty css="mt-5" />
      </View>
    </View>
  );
};

export default LoginMain;
