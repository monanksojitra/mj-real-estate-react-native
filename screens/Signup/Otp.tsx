import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Title from '../../components/Title';
import {useNavigation} from '@react-navigation/native';

interface OTPProps {
  onComplete: (code: string) => void;
  length?: number;
}

const Otp = () => {
  const length = 4;
  const [otp, setOtp] = useState<string[]>(Array(length).fill(''));
  const navigate = useNavigation();

  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(30);
  const inputsRef = useRef(
    Array(length)
      .fill(null)
      .map(() => React.createRef<TextInput>()),
  );
  if (otp.join('') === '1234') {
    navigate.navigate('location');
  }
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
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });
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
      <Header skip={false} />
      <View className="flex justify-between items-stretch">
        <Title
          title="Enter the"
          titleBold="code"
          subtitle="Enter the 4 digit code that we just sent to"
        />
      </View>
      <View className="flex flex-row items-center justify-between px-5">
        {Array.from({length}).map((_, index) => (
          <TextInput
            key={index}
            className={`border-2 text-blue-100 text-2xl ${
              otp[index] ? 'border-green-500' : 'border-blue-200'
            }  pl-8  rounded-xl h-20 aspect-square`}
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
          <Text className="text-blue-300 text-xs">
            {minutes ? minutes : '00:' + seconds.toFixed(0).padStart(2, '0')}
          </Text>
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
