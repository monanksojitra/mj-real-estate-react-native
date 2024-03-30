import {View, Text} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import Title from '../../components/Title';
import PaymentCard from '../../components/PaymentCard';

const PaymentMethod = () => {
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
      </View>
    </View>
  );
};

export default PaymentMethod;
