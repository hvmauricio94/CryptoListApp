import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import GeneralStack from './src/routes/GeneralStack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <GeneralStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
