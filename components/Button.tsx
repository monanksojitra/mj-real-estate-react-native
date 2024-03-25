import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {cn} from '../util/cn';

const Button = ({css = ' ', onpress, title}) => {
  return (
    <TouchableOpacity
      onPress={onpress}
      className={cn(
        'bg-primary h-14 px-16 flex items-center justify-center rounded-xl ',
        css,
      )}>
      <Text className="text-base font-bold text-white">{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
