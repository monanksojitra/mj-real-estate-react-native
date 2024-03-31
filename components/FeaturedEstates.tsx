import {View, Text, ImageBackground, Image} from 'react-native';
import React from 'react';
import {Title} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type Props = {
  img: any;
  title: string;
  reting: string;
  location: string;
  price: number;
  type: string;
};

const FeaturedEstates = ({
  img,
  title,
  reting,
  location,
  price,
  type,
}: Props) => {
  return (
    <View className="flex flex-row items-center ml-2 justify-between bg-white rounded-3xl  h-[160px] w-[270px]">
      <View className=" h-full p-2 relative">
        <Image className="h-[140px] w-[130px] rounded-3xl" source={img} />

        <View className="flex h-[85%] top-4 left-4 justify-between items-start absolute">
          <View className="bg-primary h-6 aspect-square rounded-full flex items-center justify-center">
            <FontAwesome name="heart" size={11} color="white" />
          </View>
          <View className="bg-blue-300 flex px-3 items-center justify-center h-9   rounded-2xl">
            <Text className="text-white text-xs">{type}</Text>
          </View>
        </View>
      </View>
      <View className="flex h-full ml-1 py-3 justify-between">
        <View className="flex w-[80%] gap-y-1">
          <Text className="text-blue-300 text-sm font-bold">{title}</Text>
          <View className="flex flex-row items-center gap-x-1 justify-start">
            <FontAwesome name="star" size={10} color="#FFC42D" />
            <Text className="text-blue-300 text-[8px]">{reting}</Text>
          </View>
          <View className="flex flex-row items-center gap-x-1 justify-start">
            <MaterialIcons name="location-on" size={10} color="#234F68" />
            <Text className="text-blue-300 text-[8px]">{location}</Text>
          </View>
        </View>
        <View className="flex flex-row items-baseline">
          <Text className="text-blue-300 text-base font-semibold">
            ${price}
          </Text>
          <Text className="text-blue-300 font-normal text-xs">/month</Text>
        </View>
      </View>
    </View>
  );
};

export default FeaturedEstates;
