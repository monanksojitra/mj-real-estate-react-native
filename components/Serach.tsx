import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {cn} from '../util/cn';

const Serach = ({css = '', mainicon, navigationicon, placeholder}) => {
  return (
    <View
      className={cn(
        'flex flex-row h-20 items-center justify-between px-5 bg-slate-200 rounded-xl',
        css,
      )}>
      <Icon name={mainicon} color="#1F4C6B" size={28} />

      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#A1A5C1"
        className="w-[85%] text-blue-100 text-base"
      />
      <TouchableOpacity className="">
        <Icon name={navigationicon} color="#A1A5C1" size={36} />
      </TouchableOpacity>
    </View>
  );
};

export default Serach;
