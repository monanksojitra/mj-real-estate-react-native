import {View, Text, ImageBackground, Image} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

type Props = {
  img?: any;
  titel: string;
  subtitel: string;
};
const EventCard = ({img, titel, subtitel}: Props) => {
  return (
    <View className="rounded-3xl relative ml-2">
      <Image
        className="h-[180px] w-[270px] rounded-3xl rounded-bl-none"
        source={img}
      />
      <View className="absolute flex items-start justify-between h-[180px] w-[270px]">
        <View className="px-4 mt-5 w-[60%]">
          <Text className="text-lg font-bold leading-5 text-white">
            {titel}
          </Text>
          <Text className="text-white ">{subtitel}</Text>
        </View>
        <View className="bg-blue-400 h-14 w-[35%] rounded-tr-3xl flex items-center justify-center">
          <AntDesign name="arrowright" size={24} color="white" />
        </View>
      </View>
    </View>
  );
};

export default EventCard;
