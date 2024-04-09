import {View, Text} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {cn} from '../util/cn';

type Props = {
  back?: boolean;
  skip?: boolean;
  css?: string;
  onSkip?: () => void;
};
const Header = ({back = true, skip = true, css = '', onSkip}: Props) => {
  const navigation = useNavigation();
  return (
    <View
      className={cn(
        'h-16 w-full p-5 mt-3 flex flex-row items-center justify-between',
        css,
      )}>
      <View>
        {back && (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="h-12 aspect-square flex items-center justify-center rounded-full bg-slate-200">
            <Ionicons name="chevron-back" size={18} color="#234F68" />
          </TouchableOpacity>
        )}
      </View>
      {skip && (
        <TouchableOpacity
          onPress={onSkip}
          className="h-11 px-7 flex items-center justify-center rounded-full bg-slate-200">
          <Text className="text-blue-600 font-light">skip</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;
