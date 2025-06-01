import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from '../components/pages/home';

export type HomeStackParamList = {
  HomePage: undefined;
  Detail: { id: string };
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="HomePage" component={HomePage} options={{headerShown: false}}/>
  </Stack.Navigator>
);

export default HomeStack;
