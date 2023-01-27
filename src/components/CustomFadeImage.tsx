/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  ActivityIndicator,
  Animated,
  StyleProp,
  View,
  ImageStyle,
} from 'react-native';
import useFade from '../hooks/useFade';

interface Props {
  uri: string;
  style?: StyleProp<ImageStyle>;
}

export const CustomFadeImage = ({uri, style}: Props) => {
  const {fadeIn, opacity} = useFade();
  const [isLoading, setLoading] = useState(true);
  const loadingEnd = () => {
    setLoading(false);
    fadeIn();
  };
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {isLoading && (
        <ActivityIndicator style={{position: 'absolute'}} color={'#f5d716'} />
      )}

      <Animated.Image
        source={{uri}}
        onLoad={loadingEnd}
        style={{
          ...(style as any),
          opacity,
          //   width: '95%',
          //   height: 400,
          //   backgroundColor: 'gray',
          //   margin: 10,
          //   borderRadius: 15,
        }}
      />
    </View>
  );
};
