import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Button from '../components/Button';

const Intro = ({navigation}: any) => {
  const introList = [
    {
      id: 1,
      title: 'Find best place to stay in ',
      impotent: 'good price',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.',
      img: require('../assets/img1.png'),
    },
    {
      id: 2,
      title: 'Fast sell your property in just ',
      impotent: 'one click ',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.',
      img: require('../assets/img2.png'),
    },
    {
      id: 3,
      title: 'Find perfect choice for your ',
      impotent: 'future house',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed.',
      img: require('../assets/img3.png'),
    },
  ];
  const [index, setIndex] = useState(0);
  return (
    <View className="px-5 pt-3">
      <View className="flex flex-row  items-center justify-between">
        <View className="">
          <Image source={require('../assets/logo2.png')} />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('login')}
          className="bg-light-100 h-10 px-7 flex items-center justify-center rounded-3xl">
          <Text className="text-xs tracking-widest text-black">skip</Text>
        </TouchableOpacity>
      </View>
      <View className="p-5 mt-7 w-[90%] space-y-5">
        <Text className="text-2xl font-medium text-black">
          {introList[index].title}
          <Text className="text-blue-100">{introList[index].impotent}</Text>
        </Text>
        <Text className="text-black/40 text-xs">
          {introList[index].subtitle}
        </Text>
      </View>
      <View className="relative flex items-center">
        <Image source={introList[index].img} />
        <View className="absolute bottom-5 w-full flex items-center">
          <View className="bg-white rounded-2xl h-1 w-[20%]">
            <View className="bg-slate-300 h-1 rounded-2xl w-[40%]"></View>
          </View>

          <Button
            onpress={
              index < 2
                ? () => setIndex(pre => pre + 1)
                : () => navigation.navigate('login')
            }
            title={index < 2 ? 'Next' : 'Start'}
            css="mt-5"
          />
        </View>
      </View>
    </View>
  );
};

export default Intro;
