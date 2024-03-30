import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React, {useState} from 'react';
import Navbar from './Navbar';
import Serach from '../components/Serach';

const Home = () => {
  const catogery = [
    {id: 0, name: 'all'},
    {id: 1, name: 'House'},
    {id: 2, name: 'Apartment'},
    {id: 3, name: 'Villa'},
    {id: 4, name: 'Office'},
    {id: 5, name: 'Shop'},
  ];
  const [selected, setSelected] = useState(0);

  return (
    <View>
      <View className="h-[356px] aspect-square rounded-full absolute -left-20 -top-20 -z-10 bg-blue-400/30" />
      <Navbar />
      <View className="px-6 space-y-2 mt-10">
        <Text className="text-blue-200 text-2xl">
          Hey,<Text className="text-blue-400 font-bold"> Monank!</Text>
        </Text>
        <Text className="text-blue-200 text-2xl">Let's start exploring </Text>
      </View>
      <Serach
        css="mx-5 mt-6 pr-7"
        mainicon="search"
        navigationicon="mic-none"
        placeholder="Search House, Apartment, etc"
      />
      <View className="flex flex-row items-center  gap-x-2 px-5 mt-6 justify-between ">
        <FlatList
          data={catogery}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => setSelected(item.id)}
              key={item.id}
              className={`${
                selected == item.id ? 'bg-blue-300' : 'bg-slate-200'
              } h-14 mx-1.5 px-8 flex items-center justify-center rounded-3xl`}>
              <Text
                className={`${
                  selected == item.id ? 'text-white' : 'text-blue-400'
                }`}>
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default Home;
