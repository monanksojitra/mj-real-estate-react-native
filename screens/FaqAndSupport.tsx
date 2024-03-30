import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Header from '../components/Header';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Accordion from 'react-native-collapsible/Accordion';
import Icon from 'react-native-vector-icons/FontAwesome';
import Title from '../components/Title';

// Define the Section type
type Section = {
  title: string;
  content: JSX.Element;
};

const FaqAndSupport: React.FC = () => {
  const [tab, setTab] = useState<boolean>(false);
  const [activeSections, setActiveSections] = useState<number[]>([]);

  const sections: Section[] = [
    {
      title: 'What is Rise Real Estate?',
      content: (
        <Text>
          React Native lets you create truly native apps and doesn't compromise
          your users' experiences.
        </Text>
      ),
    },
    {
      title: 'Why choose buy in Rise?',
      content: (
        <Text>
          See your changes as soon as you save. With the power of JavaScript,
          React Native lets you iterate at lightning speed.
        </Text>
      ),
    },
    {
      title: 'What is Safar?',
      content: (
        <Text>
          See your changes as soon as you save. With the power of JavaScript,
          React Native lets you iterate at lightning speed.
        </Text>
      ),
    },
  ];

  function renderHeader(section: Section, _: unknown, isActive: boolean) {
    return (
      <View className="flex flex-row items-center justify-between p-2">
        <Text className="text-blue-200 text-base font-bold">
          {section.title}
        </Text>
        <Icon name={isActive ? 'minus' : 'plus'} size={20} color="#8BC83F" />
      </View>
    );
  }

  function renderContent(section: Section, _: unknown, _isActive: boolean) {
    return (
      <View className="bg-[#F5F4F8] rounded-xl p-3 tracking-wider leading-relaxed">
        <Text className="text-blue-200 text-xs font-normal">
          {section.content}
        </Text>
      </View>
    );
  }

  return (
    <View className="h-full bg-white">
      <Header />

      <Title
        title="FAQ &"
        titleBold="Support"
        subtitle=" Find answer to your problem using this app."
      />
      <View className="px-10">
        <View className="flex flex-row items-center border-b border-blue-100/30 py-4">
          <View className="bg-blue-100 h-8 aspect-square rounded-full flex items-center justify-center">
            <Fontisto name="world-o" size={12} color="#fff" />
          </View>
          <Text className="text-blue-200 text-xs px-3">Visit our website</Text>
        </View>
        <View className="flex flex-row items-center border-b border-blue-100/30 py-4">
          <View className="bg-blue-100 h-8 aspect-square rounded-full flex items-center justify-center">
            <Fontisto name="email" size={12} color="#fff" />
          </View>
          <Text className="text-blue-200 text-xs px-3">Email us</Text>
        </View>
        <View className="flex flex-row items-center py-4">
          <View className="bg-blue-100 h-8 aspect-square rounded-full flex items-center justify-center">
            <FontAwesome name="sticky-note-o" size={12} color="#fff" />
          </View>
          <Text className="text-blue-200 text-xs px-3">Terms of service</Text>
        </View>
      </View>
      <View className="flex flex-row items-center p-4 m-5 bg-light-200 rounded-xl">
        <Fontisto name="search" size={20} color="#252B5C" />
        <TextInput
          className=" w-full px-2 text-blue-300"
          inputMode="search"
          placeholderTextColor="#A1A5C1"
          placeholder="Try find “how to”"
        />
      </View>
      <View className="bg-light-200 flex flex-row items-center justify-around mx-5 h-14 rounded-xl">
        <TouchableOpacity
          onPress={() => setTab(false)}
          className={`${
            !tab ? 'bg-white' : ''
          } flex h-10 items-center justify-center flex-1 mx-3 rounded-3xl`}>
          <Text
            className={`${
              !tab ? 'text-blue-200 ' : 'text-blue-200/30'
            } text-xs`}>
            Buyer
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setTab(true)}
          className={`${
            tab ? 'bg-white' : ''
          } flex h-10 items-center justify-center flex-1 mx-3 rounded-3xl`}>
          <Text
            className={`${
              tab ? 'text-blue-200 ' : 'text-blue-200/30'
            } text-xs`}>
            Estate Agent
          </Text>
        </TouchableOpacity>
      </View>
      <View className="mx-6 mt-3">
        <Accordion
          align="bottom"
          sections={sections}
          activeSections={activeSections}
          renderHeader={renderHeader}
          renderContent={renderContent}
          onChange={sections => setActiveSections(sections)}
          underlayColor={'#F5F4F8'}
        />
      </View>
    </View>
  );
};

export default FaqAndSupport;
