import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useRef, useState} from 'react';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Fontisto from 'react-native-vector-icons/Fontisto';

interface OTPProps {
  onComplete: (code: string) => void;
  length?: number;
}

const Otp: React.FC<OTPProps> = ({onComplete, length = 4}) => {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(''));
  const inputsRef = useRef(
    Array(length)
      .fill(null)
      .map(() => React.createRef<TextInput>()),
  );

  const handleChangeText = (text: string, index: number) => {
    if (text.length === 1) {
      setOtp(prevOtp => {
        const newOtp = [...prevOtp];
        newOtp[index] = text;
        return newOtp;
      });

      if (index < length - 1) {
        inputsRef.current[index + 1]?.current?.focus();
      }
    } else if (text.length === 0 && index > 0) {
      inputsRef.current[index - 1]?.current?.focus();
    }
  };

  const handleKeyPress = ({nativeEvent}: any, index: number) => {
    if (nativeEvent.key === 'Backspace' && index > 0) {
      setOtp(prevOtp => {
        const newOtp = [...prevOtp];
        newOtp[index] = '';
        newOtp[index - 1] = '';
        return newOtp;
      });
      inputsRef.current[index - 1]?.current?.focus();
    }
  };
  return (
    <View className="h-full bg-white">
      <Header />
      <View className="flex justify-between items-stretch">
        <View className="p-5 mt-4">
          <Text className="text-2xl text-blue-200 font-semibold">
            Enter the
            <Text className="text-blue-100 font-bold">code </Text>
          </Text>
          <Text className="text-blue-500 text-xs mt-4">
            Enter the 4 digit code that we just sent to
          </Text>
          <Text className="text-blue-400 font-bold">jonathan@email.com</Text>
        </View>
      </View>
      <View className="flex flex-row items-center justify-between px-5">
        {Array.from({length}).map((_, index) => (
          <TextInput
            key={index}
            className="border-2 text-blue-100 text-2xl border-blue-200 pl-8  rounded-xl h-20 aspect-square"
            onChangeText={text => handleChangeText(text, index)}
            value={otp[index]}
            onKeyPress={event => handleKeyPress(event, index)}
            keyboardType="numeric"
            maxLength={1}
            ref={inputsRef.current[index]}
            autoFocus={index === 0}
          />
        ))}
      </View>
      <View className="flex items-center justify-end h-1/2">
        <View className="flex flex-row items-center justify-center rounded-3xl gap-x-2 h-14 px-4 bg-slate-100">
          <Fontisto name="stopwatch" size={24} color="#000" />
          <Text className="text-blue-300 text-xs">00.21</Text>
        </View>
        <View className="flex flex-row items-center mt-4">
          <Text className="text-xs text-gray-400">
            Didn’t receive the OTP?{' '}
          </Text>
          <TouchableOpacity>
            <Text className="text-blue-300 font-bold"> Resend OTP</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Otp;
