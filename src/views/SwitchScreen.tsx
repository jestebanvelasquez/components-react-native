/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FlatListHeader} from '../components/FlatListHeader';
import {CustomSwitch} from '../components/CustomSwitch';
import {ThemeContext} from '../context/theme/ThemeContext';

const SwitchScreen = () => {
  const [state, setState] = useState({
    isActive: true,
    isHungry: true,
    isHappy: false,
    isSuscribe: false,
  });
  const {theme} = useContext(ThemeContext);

  const onChangeSwitch = (value: boolean, field: keyof typeof state) => {
    setState({
      ...state,
      [field]: value,
    });
  };
  const {isActive, isHappy, isHungry} = state;
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  return (
    <View
      style={{
        flex: 1,
        marginHorizontal: 20,
        // marginTop: 100,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: 'white',
      }}>
      <FlatListHeader title="Switches" />
      <View style={styles.SwitchRow}>
        <Text style={{...styles.switchText, color: colors.text}}>
          is Active
        </Text>
        <CustomSwitch
          isOn={isActive}
          onChange={value => onChangeSwitch(value, 'isActive')}
        />
      </View>
      <View style={styles.SwitchRow}>
        <Text style={{...styles.switchText, color: colors.text}}>
          is Hungry
        </Text>
        <CustomSwitch
          isOn={isHungry}
          onChange={value => onChangeSwitch(value, 'isHungry')}
        />
      </View>
      <View style={styles.SwitchRow}>
        <Text style={{...styles.switchText, color: colors.text}}>is Happy</Text>
        <CustomSwitch
          isOn={isHappy}
          onChange={value => onChangeSwitch(value, 'isHappy')}
        />
      </View>
      <View style={styles.SwitchRow}>
        <Text style={{...styles.switchText, color: colors.text}}>
          is Suscribe
        </Text>
        <CustomSwitch
          isOn={isActive}
          onChange={value => onChangeSwitch(value, 'isSuscribe')}
        />
      </View>
      <Text style={{...styles.switchText, color: colors.text}}>
        {JSON.stringify(state, null, 5)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  SwitchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  switchText: {
    fontSize: 25,
  },
});

export default SwitchScreen;
