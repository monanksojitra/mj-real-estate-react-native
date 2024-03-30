import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {cn} from '../util/cn';

const CardHeader = ({css="", title}) => {
  return (
    <View
      className={cn('flex flex-row items-center justify-between px-6', css)}>
      <Text className="text-xl font-bold text-blue-200">{title}</Text>
      <TouchableOpacity>
        <Text className="text-xs text-blue-400">view all</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CardHeader;
