import {View, Text, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import React, {useState} from 'react';
import Navbar from './Navbar';
import Serach from '../components/Serach';
import EventCard from '../components/EventCard';
import CardHeader from '../components/CardHeader';
import FeaturedEstates from '../components/FeaturedEstates';
import LocationTab from '../components/LocationTab';
import EstateAgent from '../components/EstateAgent';
import ExplorProperty from '../components/ExplorProperty';

const Home = () => {
  const catogery = [
    {id: 0, name: 'all'},
    {id: 1, name: 'House'},
    {id: 2, name: 'Apartment'},
    {id: 3, name: 'Villa'},
    {id: 4, name: 'Office'},
    {id: 5, name: 'Shop'},
  ];
  const event = [
    {
      id: 1,
      src: require('../assets/event.png'),
      titel: 'Halloween Sale!',
      subtitel: 'All discount up to 60%',
    },
    {
      id: 2,
      src: require('../assets/event.png'),
      titel: 'Summer Vacation',
      subtitel: 'All discount up to 60%',
    },
  ];
  const [selected, setSelected] = useState(0);

  const featuredestates = [
    {
      id: 1,
      img: require('../assets/gridimgs/1.png'),
      title: 'Sky Dandelions Apartment',
      reting: '4.5',
      location: 'London, UK',
      price: 1200,
      type: 'Home',
    },
    {
      id: 2,
      img: require('../assets/gridimgs/2.png'),
      title: 'Sky Dandelions Apartment',
      reting: '4.2',
      location: 'London, UK',
      price: 1600,
      type: 'Home',
    },
    {
      id: 3,
      img: require('../assets/gridimgs/3.png'),
      title: 'Sky Dandelions Apartment',
      reting: '4.5',
      location: 'London, UK',
      price: 1100,
      type: 'apartment',
    },
  ];
  const locationList = [
    {id: 1, name: 'London, UK', src: require('../assets/login1.png')},
    {id: 2, name: 'Bali', src: require('../assets/login2.png')},
    {id: 3, name: 'India', src: require('../assets/login3.png')},
    {id: 4, name: 'India', src: require('../assets/login3.png')},
    {id: 5, name: 'India', src: require('../assets/login3.png')},
    {id: 6, name: 'India', src: require('../assets/login3.png')},
  ];

  return (
    <ScrollView>
      <View className="h-[356px] aspect-square rounded-full absolute -left-20 -top-20 -z-10 bg-blue-400/30" />

      <View className="px-6 space-y-2 mt-20">
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
      <View className="py-2 mt-4">
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={event}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <EventCard
              img={item.src}
              titel={item.titel}
              subtitel={item.subtitel}
            />
          )}
        />
      </View>
      <CardHeader
        title="Featured Estates"
        css="mt-4"
        explor="view all"
        onpress={() => {}}
      />
      <View className="flex mt-4">
        <FlatList
          horizontal
          data={featuredestates}
          renderItem={({item}) => <FeaturedEstates {...item} />}
        />
      </View>
      <CardHeader
        explor="explore"
        onpress={() => {}}
        title="Top Locations"
        css="mt-4"
      />
      <FlatList
        className="mt-4"
        horizontal
        data={locationList}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <LocationTab img={item.src} titel={item.name} />
        )}
      />
      <CardHeader
        explor="explore"
        onpress={() => {}}
        title="Top Estate Agent"
        css="mt-4"
      />
      <FlatList
        className="mt-4"
        horizontal
        data={locationList}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <EstateAgent img={item.src} titel={item.name} />
        )}
      />
      <CardHeader
        title="Explore Nearby Estates"
        onpress={() => {}}
        css="mt-4"
      />
      <FlatList
        className="mt-4"
        horizontal
        data={featuredestates}
        keyExtractor={item => item.id}
        renderItem={({item}) => <ExplorProperty {...item} />}
      />
    </ScrollView>
  );
};

export default Home;
