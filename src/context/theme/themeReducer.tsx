import {Theme} from '@react-navigation/native';

type ThemeAction = {type: 'get_light_theme'} | {type: 'get_dark_theme'};

export interface ThemeState extends Theme {
  currenTheme: 'light' | 'dark';
  dividerColor: string;
  title: string;
  black: string;
  secondary: string;
  icon: string;
}

export const lightTheme: ThemeState = {
  currenTheme: 'light',
  dark: false,
  dividerColor: '#3a3a3ad8',
  colors: {
    primary: '#0cdce7',
    background: 'white',
    card: 'green',
    text: '#1a1a1a',
    border: 'orange',
    notification: 'teal',
  },
  title: '#1f1f1f',
  black: '#000000',
  secondary: '#1b1a1a',
  icon: '#0cdce7',
};
export const darkTheme: ThemeState = {
  currenTheme: 'dark',
  dark: false,
  dividerColor: '#7a7777e9',
  colors: {
    primary: '#0cdce7',
    background: '#000000',
    card: 'green',
    text: '#b4b3b3',
    border: 'orange',
    notification: 'teal',
  },
  title: '#2fdef8',
  black: '#151515',
  secondary: '#7c7c7c',
  icon: '#0cdce7',
};

export const ThemeReducer = (
  state: ThemeState,
  action: ThemeAction,
): ThemeState => {
  switch (action.type) {
    case 'get_light_theme':
      return {...lightTheme};
    case 'get_dark_theme':
      return {...darkTheme};
    default:
      return state;
  }
};
