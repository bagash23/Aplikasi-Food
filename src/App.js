import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import MainTabScreen from './Router';

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <MainTabScreen />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
