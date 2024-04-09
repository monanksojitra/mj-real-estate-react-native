import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {cn} from '../util/cn';
import Ionicons from 'react-native-vector-icons/Ionicons';
type Props = {
  css?: string;
  icon?: string;
  onpress: () => void;
  title: string;
};
const Button = ({css = ' ', icon = '', onpress, title}: Props) => {
  return (
    <TouchableOpacity
      onPress={onpress}
      className={cn(
        'bg-primary h-14 px-16 flex flex-row gap-x-2 items-center justify-center rounded-xl ',
        css,
      )}>
      {icon && <Ionicons name={icon} size={24} color="white" />}
      <Text className="text-base font-bold text-white">{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
