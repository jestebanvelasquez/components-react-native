// import  from 'react';
import React, {useContext, useState} from 'react';
import {Platform, Switch} from 'react-native';
import {ThemeContext} from '../context/theme/ThemeContext';

interface Props {
  isOn: boolean;
  onChange: (value: boolean) => void;
}

export const CustomSwitch = ({isOn, onChange}: Props) => {
  const [isEnabled, setIsEnabled] = useState(isOn);
  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    onChange(!isEnabled);
  };

  const {theme} = useContext(ThemeContext);

  return (
    <Switch
      trackColor={{false: theme.secondary, true: theme.colors.primary}}
      thumbColor={Platform.OS === 'android' ? '#a2a0a2' : ''}
      ios_backgroundColor="#D3D3D3"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};
