import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../views/HomeScreen';

export type RootStackParams = {
  HomeScreen: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

const NavegationStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default NavegationStack;
