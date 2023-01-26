/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';

export const FlatListSeparatorItem = () => {
  return (
    <View
      style={{
        borderBottomWidth: 2,
        borderColor: '#9c9a9a',
        opacity: 0.4,
        marginVertical: 6,
      }}
    />
  );
};
