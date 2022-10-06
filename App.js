import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavigationTab from './src/Navigation/NavigationTab';

export default function App() {
  return (
    <NavigationContainer>
      <NavigationTab/>
    </NavigationContainer>
  );
}
