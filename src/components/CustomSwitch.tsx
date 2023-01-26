// import  from 'react';
import React, {useState} from 'react';
import {Platform, Switch} from 'react-native';

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

  return (
    <Switch
      trackColor={{false: '#D3D3D3', true: '#ffcd19'}}
      thumbColor={Platform.OS === 'android' ? '#a2a0a2' : ''}
      ios_backgroundColor="#D3D3D3"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};
