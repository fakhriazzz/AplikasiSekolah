import React from 'react';
import { StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Routers from './src/routers';

const App = () => {
  return (
    <NavigationContainer>
      <Routers />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})