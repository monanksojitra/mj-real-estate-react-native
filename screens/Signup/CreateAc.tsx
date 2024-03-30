import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LoginThirdParty from '../../components/LoginThirdParty';
import * as yup from 'yup';
import {useNavigation} from '@react-navigation/native';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Title from '../../components/Title';
type LoginFormData = {
  email: string;
  password: string;
};
const schema = yup.object().shape({
  email: yup.string().email('Invalid Email').required('Email is required'),
  name: yup
    .string()
    .min(4, 'Name must be at least 8 characters')
    .required('Full name     is required'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
});

const CreateAc = () => {
  const navigation = useNavigation();
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  });

  const toggleShowPassword = () => setShowPassword(!showPassword);

  const onSubmit = (data: LoginFormData) => {
    if (data.email === 'monank@admin.com' && data.password === '@dmin1234') {
      console.log(data);
    } else setError(true);
  };

  return (
    <View className="h-full bg-white">
      <Header />
      <View className="flex justify-between items-stretch">
        <Title
          title=" Create your"
          titleBold="account"
          subtitle=" quis nostrud exercitation ullamco laboris nisi ut"
        />

        <View className="px-7 space-y-4 my-5">
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <View className="flex gap-y-1">
                <View className="flex flex-row items-center px-3 h-16 bg-light-200 rounded-xl">
                  <Feather name="user" color="#A1A5C1" size={24} />
                  <TextInput
                    className="bg-light-200 px-2 w-[80%] text-blue-300"
                    onBlur={onBlur}
                    onChangeText={value => onChange(value)}
                    value={value}
                    inputMode="text"
                    placeholderTextColor="#A1A5C1"
                    placeholder="Full Name"
                  />
                </View>
                {errors.name && (
                  <Text className="text-red-500 text-xs">
                    {errors.name.message}
                  </Text>
                )}
              </View>
            )}
            name="name"
            rules={{required: true}}
          />
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <View className="flex gap-y-1 mt-3">
                <View className="flex flex-row items-center px-3 h-16 bg-light-200 rounded-xl">
                  <Ionicons name="mail-outline" color="#A1A5C1" size={24} />
                  <TextInput
                    className="bg-light-200 px-2 w-[80%] text-blue-300"
                    onBlur={onBlur}
                    onChangeText={value => onChange(value)}
                    value={value}
                    inputMode="email"
                    placeholderTextColor="#A1A5C1"
                    placeholder="Email"
                  />
                </View>
                {errors.email && (
                  <Text className="text-red-500 text-xs">
                    {errors.email.message}
                  </Text>
                )}
              </View>
            )}
            name="email"
            rules={{required: true}}
          />
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <View className="flex gap-y-1 mt-3">
                <View className="flex flex-row items-center px-3 h-16 bg-light-200 rounded-xl">
                  <Feather name="lock" color="#A1A5C1" size={22} />
                  <TextInput
                    secureTextEntry={!showPassword}
                    onBlur={onBlur}
                    className="bg-light-200 px-2 w-[80%] text-blue-300"
                    onChangeText={value => onChange(value)}
                    value={value}
                    inputMode="text"
                    placeholderTextColor="#A1A5C1"
                    placeholder="Password"
                  />
                </View>
                {errors.password && (
                  <Text className="text-red-500 text-xs">
                    {errors.password.message}
                  </Text>
                )}
              </View>
            )}
            name="password"
            rules={{required: true}}
          />
          <View className="flex flex-row items-center justify-between">
            <TouchableOpacity>
              <Text className="text-blue-300 text-xs font-semibold">
                Terms of service
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleShowPassword}>
              <Text className="text-blue-300 text-xs font-semibold">
                {showPassword ? 'Hide password' : 'Show password'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="w-full flex items-center justify-center mt-8">
          <Button
            onpress={handleSubmit(onSubmit)}
            title="Register"
            css="w-[60%]"
          />
        </View>
      </View>
    </View>
  );
};

export default CreateAc;
