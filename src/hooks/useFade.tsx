import {useRef} from 'react';
import {Animated, Easing} from 'react-native';

const useFade = () => {
  const opacity = useRef(new Animated.Value(0)).current;
  const position = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const startMovingPosition = (
    initPosition: number,
    duration: number = 300,
  ) => {
    position.setValue(initPosition);
    Animated.timing(position, {
      toValue: 0,
      duration: duration,
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start();
  };
  const fadeOff = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 600,
      useNativeDriver: true,
    }).start();
    Animated.timing(position, {
      toValue: -300,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  return {
    position,
    opacity,
    fadeIn,
    fadeOff,
    startMovingPosition,
  };
};

export default useFade;
