import React, {createContext, useReducer, useEffect} from 'react';
import {ThemeReducer, ThemeState, lightTheme, darkTheme} from './themeReducer';
import {useColorScheme} from 'react-native';

interface ThemeContextProps {
  theme: ThemeState;
  getLightMode: () => void;
  getDarkMode: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: any) => {
  const colorScheme = useColorScheme();

  // capturar el tema del sistema operativo y adaptarlo a la app
  const [theme, dispatch] = useReducer(
    ThemeReducer,
    colorScheme === 'dark' ? darkTheme : lightTheme,
  );

  useEffect(() => {
    colorScheme === 'dark' ? getDarkMode() : getLightMode();
  }, [colorScheme]);

  //funciones que modificaran el contexto
  const getLightMode = () => {
    dispatch({type: 'get_light_theme'});
  };
  const getDarkMode = () => {
    dispatch({type: 'get_dark_theme'});
  };

  return (
    <ThemeContext.Provider
      //las propiedades expuestas
      value={{
        theme,
        getDarkMode,
        getLightMode,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};
