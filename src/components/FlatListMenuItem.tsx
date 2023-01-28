/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {MenuItem} from '../interfaces/MenuInterface';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/core';
import {ThemeContext} from '../context/theme/ThemeContext';

interface Props {
  menuItem: MenuItem;
}
type Nav = {
  navigate: (value: string) => void;
};

export const FlatListMenuItem = ({menuItem}: Props) => {
  const navigation = useNavigation<Nav>();
  const {theme} = useContext(ThemeContext);
  let color = theme.icon;

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => navigation.navigate(menuItem.components)}>
      <View style={styles.container}>
        <Icon name={menuItem.icon} size={23} color={theme.icon} />
        <Text style={{...styles.title, color: theme.colors.text}}>
          {menuItem.name}
        </Text>
        {/* spacer */}
        <View style={{flex: 1}} />
        <Icon
          name={menuItem.row}
          size={35}
          color={theme.icon}
          style={{color}}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // justifyContent: 'space-around',
  },
  title: {
    fontSize: 19,
    marginLeft: 10,
  },
});
