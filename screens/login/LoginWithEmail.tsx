import React, {useState} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import LoginThirdParty from '../../components/LoginThirdParty';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import Title from '../../components/Title';

// Define the type for the form data
type LoginFormData = {
  email: string;
  password: string;
};

// Define the Yup schema with custom error messages
const schema = yup.object().shape({
  email: yup.string().email('Invalid Email').required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
});

const LoginWithEmail = () => {
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
      navigation.navigate('faqandsupport');
      console.log(data);
    } else setError(true);
  };

  return (
    <View className="h-full bg-white">
      <Image source={require('../../assets/loginlogo.png')} />
      <View className="flex justify-between items-stretch">
        <Title
          subtitle=" quis nostrud exercitation ullamco laboris nisi ut"
          title=" Let’s "
          titleBold="Sign In"
        />
        <Text className="text-2xl text-blue-200 font-bold">
          <Text className="text-blue-100"> </Text>
        </Text>
        <Text className="text-blue-100/50 text-xs"></Text>

        <View className="px-7 space-y-4 my-5">
          {error && (
            <View className="bg-blue-400 h-12 mb-3 rounded-xl flex items-center justify-center">
              <Text className="text-xs">User Not Found !!!</Text>
            </View>
          )}
          <Controller
            control={control}
            render={({field: {onChange, onBlur, value}}) => (
              <View className="flex gap-y-1">
                <View className="flex flex-row items-center px-3 h-16 bg-light-200 rounded-xl">
                  <Ionicons name="mail-outline" color="#A1A5C1" size={28} />
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
                  <Feather name="lock" color="#A1A5C1" size={26} />
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
                Forgot password?
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
            title="Login"
            css="w-[60%]"
          />
        </View>
        <LoginThirdParty />
      </View>
    </View>
  );
};

export default LoginWithEmail;
