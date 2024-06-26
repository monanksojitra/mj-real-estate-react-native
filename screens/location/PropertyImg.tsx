import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import Button from '../../components/Button';
import Title from '../../components/Title';

const PropertyImg = ({navigation}: any) => {
  const imggrid = [
    {id: 1, src: require('../../assets/gridimgs/1.png')},
    {id: 2, src: require('../../assets/gridimgs/2.png')},
    {id: 3, src: require('../../assets/gridimgs/3.png')},
    {id: 4, src: require('../../assets/gridimgs/4.png')},
    {id: 5, src: require('../../assets/gridimgs/5.png')},
    {id: 6, src: require('../../assets/gridimgs/6.png')},
    {id: 7, src: require('../../assets/gridimgs/7.png')},
    {id: 11, src: require('../../assets/gridimgs/11.png')},
    {id: 8, src: require('../../assets/gridimgs/8.png')},
    {id: 9, src: require('../../assets/gridimgs/9.png')},
    {id: 12, src: require('../../assets/gridimgs/12.png')},
    {id: 14, src: require('../../assets/gridimgs/14.png')},
    {id: 16, src: require('../../assets/gridimgs/16.png')},
    {id: 10, src: require('../../assets/gridimgs/10.png')},
    {id: 13, src: require('../../assets/gridimgs/13.png')},
    {id: 15, src: require('../../assets/gridimgs/15.png')},
  ];
  return (
    <View>
      <Header onSkip={() => navigation.navigate('selectproperty')} />

      <Title
        title=" Select your preferable"
        titleBold="real estate type"
        subtitle="  You can edit this later on your account setting."
      />
      <View className="flex flex-row flex-wrap items-center justify-center">
        {imggrid.map(item => (
          <View key={item.id} className="px-[2px] py-px">
            <Image source={item.src} />
          </View>
        ))}
      </View>
      <View className="flex absolute z-10 bottom-5 w-full  items-center justify-center">
        <Button onpress={() => {}} title="Show more" />
      </View>
    </View>
  );
};

export default PropertyImg;
