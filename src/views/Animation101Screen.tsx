import React from 'react';
import {StyleSheet, View, Animated, Button} from 'react-native';
import useFade from '../hooks/useFade';

const Animation101Screen = () => {
  const {fadeIn, fadeOff, opacity, position, startMovingPosition} = useFade();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Animated.View
        style={{
          ...styles.purpleBox,
          opacity,
          transform: [
            {
              translateY: position,
            },
          ],
        }}
      />
      <Button
        title="Fade In"
        onPress={() => {
          fadeIn();
          startMovingPosition(-300, 600);
        }}
      />
      <Button
        title="Fade Off"
        onPress={() => {
          fadeOff();
          //   startMovingPosition(-300);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  purpleBox: {
    backgroundColor: '#5856d6',
    width: 150,
    height: 150,
  },
});

export default Animation101Screen;
