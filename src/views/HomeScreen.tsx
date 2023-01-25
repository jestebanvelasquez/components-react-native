import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Text, View} from 'react-native';

const HomeScreen = () => {
  return (
    <View>
      <Text>House!!</Text>
      <Icon name="star" size={30} color={'green'} />
    </View>
  );
};

export default HomeScreen;
