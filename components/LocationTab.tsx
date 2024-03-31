import {View, Text, Image} from 'react-native';
import React from 'react';
import {cn} from '../util/cn';

type Props = {
  img: any;
  titel: string;
  classname?: string;
};

const LocationTab = ({img, titel, classname = ''}: Props) => {
  return (
    <View
      className={cn(
        'bg-white rounded-3xl flex h-14 px-2 flex-row ml-2 items-center justify-center',
        classname,
      )}>
      <View className="h-10 aspect-square rounded-full">
        <Image source={img} className="h-10 aspect-square rounded-full" />
      </View>
      <Text className="text-xs text-blue-300 font-medium px-2">{titel}</Text>
    </View>
  );
};

export default LocationTab;
