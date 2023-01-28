/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useEffect} from 'react';
import {Animated, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import useFade from '../hooks/useFade';
import {useNavigation} from '@react-navigation/native';
import {ThemeContext} from '../context/theme/ThemeContext';

interface Nav {
  navigate: (item: string) => void;
}

export const CustomButtonFade = () => {
  const {fadeIn, opacity, fadeOff, startMovingPosition, position} = useFade();
  useEffect(() => {
    fadeIn();
    return () => {
      fadeOff();
      startMovingPosition(-300, 600);
    };
  }, []);

  const {navigate} = useNavigation<Nav>();
  const {theme} = useContext(ThemeContext);
  const colorR = theme;
  return (
    <Animated.View
      style={{
        opacity,
        transform: [
          {
            translateX: position,
          },
        ],
      }}>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          backgroundColor: '#525252',
          justifyContent: 'center',
          alignItems: 'center',
          height: 40,
          borderRadius: 10,
        }}
        activeOpacity={0.7}
        onPress={() => navigate('HomeScreen')}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '500',
            padding: 5,
            color: theme.colors.primary,
          }}>
          Entrar
        </Text>
        <Icon
          name="caret-forward-outline"
          color={colorR.colors.primary}
          size={30}
        />
      </TouchableOpacity>
    </Animated.View>
  );
};
