import {View, Text, Image} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
type Props = {
  img: any;
  title: string;
  reting: string;
  location: string;
  price: string;
};
const ExplorProperty = ({img, title, reting, location, price}: Props) => {
  return (
    <View className="flex items-center ml-2 justify-center bg-white rounded-3xl  w-[180px] h-[250px]">
      <View className="pt-2 relative">
        <Image className="h-[160px] w-[165px] rounded-3xl" source={img} />
        <View className="flex h-[87%] top-5 right-3 justify-between items-end absolute">
          <View className="bg-primary h-6 aspect-square rounded-full flex items-center justify-center">
            <FontAwesome name="heart" size={11} color="white" />
          </View>
          <View className="bg-blue-300 flex flex-row px-3 items-center justify-center h-9   rounded-2xl">
            <Text className="text-white text-sm font-semibold ">${price}</Text>
            <Text className="text-white font-normal text-[8px]">/month</Text>
          </View>
        </View>
      </View>
      <View className="flex w-full p-3 gap-y-1">
        <Text className="text-blue-300 text-sm font-bold">{title}</Text>
        <View className="flex flex-row gap-x-1">
          <View className="flex flex-row items-center gap-x-1 justify-start">
            <FontAwesome name="star" size={10} color="#FFC42D" />
            <Text className="text-blue-300 text-[8px]">{reting}</Text>
          </View>
          <View className="flex flex-row items-center gap-x-1 justify-start">
            <MaterialIcons name="location-on" size={10} color="#234F68" />
            <Text className="text-blue-300 text-[8px]">{location}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ExplorProperty;
