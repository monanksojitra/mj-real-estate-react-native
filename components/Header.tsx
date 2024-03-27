import {View, Text} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  return (
    <View className="h-16 w-full p-5">
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="h-12 aspect-square flex items-center justify-center rounded-full bg-slate-200">
        <Ionicons name="chevron-back" size={18} color="#234F68" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
