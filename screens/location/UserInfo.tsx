import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Header';
import Title from '../../components/Title';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Button from '../../components/Button';
import Alert from '../../components/Alert';

const UserInfo = ({navigation}: any) => {
  const [alert, setAlert] = useState(false);
  const handelNavigate = () => {
    setAlert(false);
    navigation.navigate('home');
  };
  return (
    <View>
      <Header onSkip={() => navigation.navigate('home')} />
      <Title
        title="Fill your"
        titleBold=" information below "
        subtitle="You can edit this later on your account setting."
      />
      <View className="flex items-center justify-center">
        <View className="flex items-center justify-center">
          <View className="bg-slate-200 h-[100px] aspect-square flex items-center justify-center rounded-full">
            <FontAwesome name="user" size={42} color="#A1A5C1" />
          </View>
          <View className="bg-blue-300 rounded-full h-7 absolute bottom-0 right-0  aspect-square flex items-center justify-center">
            <Feather name="edit-2" size={16} color="white" />
          </View>
        </View>
      </View>
      <View className="flex items-center justify-center px-3 gap-y-4 mt-5">
        <View className="flex flex-row items-center pl-3 pr-4 h-16 bg-slate-200 rounded-xl">
          <TextInput
            className="bg-transparent px-2 w-[89%] text-blue-300"
            inputMode="text"
            placeholderTextColor="#A1A5C1"
            placeholder="Enter your name"
          />
          <Feather name="user" color="#252B5C" size={24} />
        </View>
        <View className="flex flex-row items-center pl-3 pr-4 h-16 bg-slate-200 rounded-xl">
          <TextInput
            className="bg-transparent px-2 w-[89%] text-blue-300"
            inputMode="text"
            placeholderTextColor="#A1A5C1"
            placeholder="mobile number"
          />
          <Feather name="phone-call" color="#252B5C" size={24} />
        </View>
        <View className="flex flex-row items-center pl-3 pr-4 h-16 bg-slate-200 rounded-xl">
          <TextInput
            className="bg-transparent px-2 w-[89%] text-blue-300"
            inputMode="text"
            placeholderTextColor="#A1A5C1"
            placeholder="Enter your email"
          />
          <Feather name="mail" color="#252B5C" size={24} />
        </View>
      </View>
      <View className="flex items-center justify-center mt-8">
        <Button onpress={() => setAlert(true)} title="Next" css="w-[60%]" />
      </View>
      <Alert setAlert={handelNavigate} toggle={alert} />
    </View>
  );
};

export default UserInfo;
