/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {View} from 'react-native';
import {ThemeContext} from '../context/theme/ThemeContext';

export const FlatListSeparatorItem = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <View
      style={{
        borderBottomWidth: 2,
        borderColor: theme.dividerColor,
        opacity: 0.4,
        marginVertical: 6,
      }}
    />
  );
};
