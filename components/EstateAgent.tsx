import {View, Text, Image} from 'react-native';
import React from 'react';
import {cn} from '../util/cn';

type Props = {
  img: any;
  titel: string;
  classname?: string;
};
const EstateAgent = ({img, titel, classname}: Props) => {
  return (
    <View
      className={cn(
        ' rounded-3xl flex  px-2 ml-2 items-center justify-center',
        classname,
      )}>
      <View className="h-16 border border-slate-400 p-px aspect-square rounded-full">
        <Image source={img} className="h-full aspect-square rounded-full" />
      </View>
      <Text className="text-xs text-blue-300 font-medium mt-1">{titel}</Text>
    </View>
  );
};

export default EstateAgent;
