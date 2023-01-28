import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {styles} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ThemeContext} from '../context/theme/ThemeContext';

interface Props {
  title: string;
  marginTop?: number;
  marginBottom?: number;
}

export const FlatListHeader = ({
  title,
  marginBottom = 20,
  marginTop = 20,
}: Props) => {
  const {top} = useSafeAreaInsets();

  const {theme} = useContext(ThemeContext);

  return (
    <View
      style={{
        marginTop: top + marginTop,
        marginBottom: marginBottom,
      }}>
      <Text style={{...styles.title, color: theme.title}}>{title}</Text>
    </View>
  );
};
