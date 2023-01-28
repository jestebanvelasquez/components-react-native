/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {FlatListHeader} from '../components/FlatListHeader';
import {View, Text} from 'react-native';
import {styles} from '../theme/appTheme';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ThemeContext} from '../context/theme/ThemeContext';

export const ThemeAppScreen = () => {
  const {
    getDarkMode,
    getLightMode,
    theme: {currenTheme},
    theme: {colors},
  } = useContext(ThemeContext);
  const changeTheme = () => {
    currenTheme === 'dark' ? getLightMode() : getDarkMode();
  };

  return (
    <View
      style={{
        ...styles.globalMargin,
      }}>
      <FlatListHeader title="Theme App" />
      <View
        style={{
          flexDirection: 'row-reverse',
        }}>
        <TouchableOpacity
          onPress={() => changeTheme()}
          activeOpacity={0.7}
          style={{
            backgroundColor: colors.primary,
            width: 150,
            height: 40,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 22,
              color: colors.background,
              fontWeight: 'bold',
            }}>
            Light | Dark
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
