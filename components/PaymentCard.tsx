import {View, Text, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const PaymentCard = () => {
  return (
    <LinearGradient
      start={{x: 0, y: 1}}
      end={{x: 1, y: 0}}
      className="h-48  w-[80%] rounded-3xl p-7 space-y-3"
      colors={['#4285F4', '#3A9997', '#34A853']}>
      <View className="flex flex-row items-center justify-between ">
        <Image source={require('../assets/Chip.png')} />
        <View className="flex flex-row items-center justify-between gap-x-2">
          <Image source={require('../assets/Touch.png')} />
          <Image source={require('../assets/Contactless.png')} />
          <Image source={require('../assets/ApplePay.png')} />
          <Image source={require('../assets/GooglePay.png')} />
        </View>
      </View>
      <View className="flex items-center justify-center">
        <Text className="text-2xl font-stalker tracking-widest text-white">
          **** **** **** 1234
        </Text>
      </View>
      <View className="flex flex-row items-center justify-between">
        <View className="">
          <View className="flex  flex-row items-center justify-start">
            <Text className="text-[8px] w-[30%] text-white">VALID THRU</Text>
            <Text className="text-lg text-white">01/22</Text>
          </View>
          <View>
            <Text className="text-lg text-white">Monank Sojitra</Text>
          </View>
        </View>
        <View className="flex items-baseline justify-center">
          <Image source={require('../assets/Mastercard.png')} />
        </View>
      </View>
    </LinearGradient>
  );
};

export default PaymentCard;
