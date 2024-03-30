import React, {useState} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import Title from '../../components/Title';
import Header from '../../components/Header';
import {Checkbox} from 'react-native-paper';
import Button from '../../components/Button';

const SelectProperty = () => {
  const imggrid = [
    {id: 1, src: require('../../assets/gridimgs/1.png')},
    {id: 2, src: require('../../assets/gridimgs/2.png')},
    {id: 3, src: require('../../assets/gridimgs/3.png')},
    {id: 4, src: require('../../assets/gridimgs/4.png')},
    {id: 5, src: require('../../assets/gridimgs/5.png')},
    {id: 6, src: require('../../assets/gridimgs/6.png')},
  ];
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelect = (itemId: number) => {
    setSelectedItems(prevSelectedItems => {
      if (prevSelectedItems.includes(itemId)) {
        return prevSelectedItems.filter(id => id !== itemId);
      } else {
        return [...prevSelectedItems, itemId];
      }
    });
  };

  return (
    <View className="flex justify-center h-screen">
      <Header />
      <Title
        title="Select your preferable"
        titleBold="real estate type "
        subtitle="You can edit this later on your account setting."
      />
      <FlatList
        className="h-full"
        showsVerticalScrollIndicator={false}
        data={imggrid}
        numColumns={2}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => handleSelect(item.id)}
            className={`
                  ${
                    selectedItems.includes(item.id)
                      ? 'bg-blue-300'
                      : 'bg-light-100'
                  } m-1 rounded-3xl p-4`}>
            <Image
              source={item.src}
              className="h-40 aspect-square rounded-2xl"
            />
            <Text
              className={` ${
                selectedItems.includes(item.id)
                  ? 'text-light-100'
                  : 'text-blue-300'
              } font-bold text-base px-3 pt-4`}>
              Apartment
            </Text>
            <View className="bg-white h-8 absolute top-7 left-7 aspect-square rounded-full flex items-center justify-center">
              <Checkbox.Item
                label=""
                status={
                  selectedItems.includes(item.id) ? 'checked' : 'unchecked'
                }
                uncheckedColor="transparent"
                onPress={() => handleSelect(item.id)}
              />
            </View>
          </TouchableOpacity>
        )}
      />
      <View className="flex items-center justify-center">
        <Button
          onpress={() => {}}
          title="Next"
          css="absolute bottom-10 w-[60%]"
        />
      </View>
    </View>
  );
};

export default SelectProperty;
