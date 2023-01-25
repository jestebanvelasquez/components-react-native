import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import NavegationStack from './src/router/NavegationStack';

const App = () => {
  return (
    <NavigationContainer>
      <NavegationStack />
    </NavigationContainer>
  );
};

export default App;
