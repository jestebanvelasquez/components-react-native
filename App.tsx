import 'react-native-gesture-handler';
import React from 'react';
import NavegationStack from './src/router/NavegationStack';
import {ThemeProvider} from './src/context/theme/ThemeContext';

const App = () => {
  return (
    <AppStateTheme>
      <NavegationStack />
    </AppStateTheme>
  );
};

const AppStateTheme = ({children}: any) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default App;
