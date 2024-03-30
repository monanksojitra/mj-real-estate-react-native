import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Header';
import Title from '../../components/Title';
import PaymentCard from '../../components/PaymentCard';
import Feather from 'react-native-vector-icons/Feather';
import Button from '../../components/Button';

const PaymentMethod = () => {
  const [activeindex, setActiveIndex] = useState(0);
  const paymentcards = [
    {
      id: 1,
      title: '**** **** **** 1234',
      subtitle: 'Monank Sojitra',
      img: require('../../assets/VisaNormal.png'),
      cardname: 'Visa',
    },
    {
      id: 2,
      title: '**** **** **** 1234',
      subtitle: 'Monank Sojitra',
      img: require('../../assets/MastercardNormal.png'),
      cardname: 'MasterCard',
    },
    {
      id: 3,
      title: '**** **** **** 1234',
      subtitle: 'Monank Sojitra',
      img: require('../../assets/PaypalNormal.png'),
      cardname: 'PayPal',
    },
  ];
  return (
    <View>
      <Header />
      <Title
        title="Add your "
        titleBold="payment method"
        subtitle="You can edit this later on your account setting."
      />
      <View className="flex items-center justify-center">
        <PaymentCard />
        <View className="flex flex-row items-center justify-between gap-x-4 mt-5">
          {paymentcards.map(item => (
            <TouchableOpacity
              onPress={() => setActiveIndex(item.id)}
              key={item.id}
              className={` ${
                activeindex == item.id ? 'bg-blue-300' : 'bg-slate-200'
              }  flex flex-row items-center justify-center gap-x-2 px-3 h-12 rounded-3xl`}>
              <Image
                source={item.img}
                className={`${activeindex == item.id ? 'bg-white' : ''}`}
              />
              <Text
                className={` ${
                  activeindex == item.id ? 'text-light-100' : 'text-blue-300'
                } text-xs font-medium`}>
                {item.cardname}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View className="px-5 space-y-3 mt-5">
        <View className="flex flex-row items-center px-2 h-16 bg-slate-200 rounded-xl">
          <TextInput
            className="bg-transparent px-2 w-[89%] text-blue-300"
            inputMode="text"
            placeholderTextColor="#A1A5C1"
            placeholder="Enter your name"
          />
          <Feather name="user" color="#252B5C" size={28} />
        </View>
        {activeindex == 3 ? (
          <View className="flex flex-row items-center px-2 h-16 bg-slate-200 rounded-xl">
            <TextInput
              className="bg-transparent  w-[89%] text-blue-300"
              inputMode="email"
              placeholderTextColor="#A1A5C1"
              placeholder="Email"
            />
            <Feather name="mail" color="#252B5C" size={28} />
          </View>
        ) : (
          <View className="flex flex-row items-center px-2 h-16 bg-slate-200 rounded-xl">
            <TextInput
              className="bg-transparent  w-[89%] text-blue-300"
              inputMode="email"
              placeholderTextColor="#A1A5C1"
              placeholder="1222 3443 9881 1222"
            />
            <Feather name="credit-card" color="#252B5C" size={28} />
          </View>
        )}
        {activeindex != 3 && (
          <View className="flex flex-row items-center justify-between">
            <View className="flex w-[49%] flex-row items-center justify-between px-3 h-16 bg-slate-200 rounded-xl">
              <TextInput
                className="bg-transparent  text-blue-300"
                inputMode="numeric"
                placeholderTextColor="#A1A5C1"
                placeholder="11/05/2023"
              />
              <Feather name="calendar" color="#252B5C" size={28} />
            </View>
            <View className="flex flex-row w-[49%] items-center px-3 h-16 bg-slate-200 rounded-xl">
              <Feather name="credit-card" color="#252B5C" size={28} />
              <TextInput
                className="bg-transparent px-3  text-blue-300"
                inputMode="email"
                placeholderTextColor="#A1A5C1"
                placeholder="cvv"
              />
            </View>
          </View>
        )}
      </View>
      <View className="flex items-center justify-center mt-10">
        <Button onpress={() => {}} title="Next" css="w-[60%]" />
      </View>
    </View>
  );
};

export default PaymentMethod;
