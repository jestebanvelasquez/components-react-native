import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface Props {
  title: string;
  color?: string;
  marginTop?: number;
  marginBottom?: number;
}

export const FlatListHeader = ({
  title,
  color = '#d1d1d1',
  marginBottom = 20,
  marginTop = 20,
}: Props) => {
  const {top} = useSafeAreaInsets();

  return (
    <View
      style={{
        marginTop: top + marginTop,
        marginBottom: marginBottom,
      }}>
      <Text style={{...styles.title, color}}>{title}</Text>
    </View>
  );
};
