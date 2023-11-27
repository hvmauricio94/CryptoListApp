import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home/Home';
import CryptoDetail from '../screens/CryptoDetail/CryptoDetail';

const GeneralStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerTransparent: true,
        headerTitle: '',
        headerTintColor: '#FFFFFF',
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CryptoDetail" component={CryptoDetail} />
    </Stack.Navigator>
  );
};

export default GeneralStack;

const styles = StyleSheet.create({});
