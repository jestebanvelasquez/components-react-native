/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {StyleSheet, View, Animated, Button, Text} from 'react-native';
import useFade from '../hooks/useFade';
import {ThemeContext} from '../context/theme/ThemeContext';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Animation101Screen = () => {
  const {fadeIn, fadeOff, opacity, position, startMovingPosition} = useFade();
  const {theme} = useContext(ThemeContext);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Animated.View
        style={{
          ...styles.yellowBox,
          backgroundColor: theme.colors.primary,
          opacity,
          transform: [
            {
              translateY: position,
            },
          ],
        }}
      />
      <View
        style={{
          ...styles.botton,
          backgroundColor: theme.colors.primary,
          marginTop: 15,
          marginBottom: 10,
        }}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            fadeIn();
            startMovingPosition(-300, 600);
          }}>
          <Text style={{fontSize: 20}}>Fade In</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          ...styles.botton,
          backgroundColor: theme.colors.primary,
          margin: 10,
        }}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            fadeOff();
            //   startMovingPosition(-300);
          }}>
          <Text style={{fontSize: 20}}>Fade Off</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  yellowBox: {
    width: 150,
    height: 150,
    borderRadius: 18,
  },
  botton: {
    width: 140,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});

export default Animation101Screen;
