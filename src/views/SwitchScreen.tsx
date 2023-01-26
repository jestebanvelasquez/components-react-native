/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FlatListHeader} from '../components/FlatListHeader';
import {CustomSwitch} from '../components/CustomSwitch';

const SwitchScreen = () => {
  const [state, setState] = useState({
    isActive: true,
    isHungry: true,
    isHappy: false,
  });
  const onChange = (value: boolean, field: keyof typeof state) => {
    setState({
      ...state,
      [field]: value,
    });
  };
  const {isActive, isHappy, isHungry} = state;

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
      <FlatListHeader title="Switches" color="#afafaf" />
      <View style={styles.SwitchRow}>
        <Text style={styles.switchText}>is Active</Text>
        <CustomSwitch
          isOn={isActive}
          onChange={value => onChange(value, 'isActive')}
        />
      </View>
      <View style={styles.SwitchRow}>
        <Text style={styles.switchText}>is Hungry</Text>
        <CustomSwitch
          isOn={isHungry}
          onChange={value => onChange(value, 'isHungry')}
        />
      </View>
      <View style={styles.SwitchRow}>
        <Text style={styles.switchText}>is Happy</Text>
        <CustomSwitch
          isOn={isHappy}
          onChange={value => onChange(value, 'isHappy')}
        />
      </View>
      <Text style={styles.switchText}>{JSON.stringify(state, null, 5)}</Text>
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
    color: 'white',
  },
});

export default SwitchScreen;
