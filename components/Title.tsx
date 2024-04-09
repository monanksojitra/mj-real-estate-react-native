import {View, Text} from 'react-native';
import React from 'react';
import {cn} from '../util/cn';

type Props = {
  css?: string;
  title: string;
  titleBold: string;
  subtitle?: string;
};
const Title = ({css = '', title, titleBold, subtitle = ''}: Props) => {
  return (
    <View className={cn('p-6 space-y-4 mt-6', css)}>
      <Text className="text-2xl text-blue-200 font-semibold">
        {title}
        <Text className="text-blue-100 font-bold"> {titleBold}</Text>
      </Text>
      <Text className="text-blue-100/50 text-xs">{subtitle}</Text>
    </View>
  );
};

export default Title;
