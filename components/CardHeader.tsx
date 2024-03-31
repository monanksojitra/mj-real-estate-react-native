import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {cn} from '../util/cn';

type Props = {
  css?: string;
  title: string;
  onpress: () => void;
  explor?: string;
};

const CardHeader = ({css = '', title, onpress, explor = ''}: Props) => {
  return (
    <View
      className={cn('flex flex-row items-center justify-between px-6', css)}>
      <Text className="text-xl font-bold text-blue-200">{title}</Text>
      <TouchableOpacity onPress={onpress}>
        <Text className="text-xs text-blue-400">{explor}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CardHeader;
