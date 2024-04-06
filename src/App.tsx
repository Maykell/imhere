import React from 'react';
import Home from './screens/Home';
import { StatusBar, useColorScheme } from 'react-native';
import colors from './styles/colors';

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={colors.primary}
      />
      <Home />
    </>
  );
}
