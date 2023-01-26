import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../views/HomeScreen';
import Animation101Screen from '../views/Animation101Screen';
import Animation102Screen from '../views/Animation102Screen';
import SwitchScreen from '../views/SwitchScreen';
import {AlertScreen} from '../views/AlertScreen';

export type RootStackParams = {
  HomeScreen: undefined;
  Animation101Screen: undefined;
  Animation102Screen: undefined;
  SwitchScreen: undefined;
  AlertScreen: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

const NavegationStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false, // eliminar el aviso del header
        cardStyle: {
          backgroundColor: '#000000',
        },
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Animation101Screen" component={Animation101Screen} />
      <Stack.Screen name="Animation102Screen" component={Animation102Screen} />
      <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
      <Stack.Screen name="AlertScreen" component={AlertScreen} />
    </Stack.Navigator>
  );
};

export default NavegationStack;
