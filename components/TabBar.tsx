import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const TabBar = ({state, descriptors, navigation}) => {
  return (
    <View>
      {state.routes.map((route: any, index: number) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <View key={index}>
            <TouchableOpacity onPress={onPress}>
              <View>
                <FontAwesome name={label ?? 'home'} />
              </View>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

export default TabBar;
