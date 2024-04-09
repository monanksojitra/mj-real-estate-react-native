import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/Ionicons';
type Props = {
  state: any;
  navigation: any;
};
const TabBar = ({state, navigation}: Props) => {
  const [focusedIndex, setFocusedIndex] = useState(1);
  const routes = [
    {id: 1, label: 'Home', iconName: 'home', routeName: 'main'},
    {id: 2, label: 'Search', iconName: 'search', routeName: 'main'},
    {id: 3, label: 'likeProperty', iconName: 'heart', routeName: 'main'},
    {id: 4, label: 'Profile', iconName: 'person', routeName: 'main'},
  ];

  return (
    <View className="flex flex-row px-7 items-center justify-between h-16 bg-light-200">
      {routes.map((route, index) => {
        const isFocused = state.index === index;

        const onPress = () => {
          setFocusedIndex(route.id);
          const event = navigation.emit({
            type: 'tabPress',
            target: route.routeName,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.routeName);
          }
        };

        return (
          <TouchableOpacity onPress={onPress} key={route.id}>
            <FontAwesome
              name={
                focusedIndex === route.id
                  ? route.iconName
                  : `${route.iconName}-outline`
              }
              size={28}
              color="#234F68"
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;
