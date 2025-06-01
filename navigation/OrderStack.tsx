import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OrderPage from '../components/pages/order';

export type HomeStackParamList = {
  OrderPage: undefined;
  Detail: { id: string };
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

const OrderStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="OrderPage" component={OrderPage} options={{headerShown: false}}/>
  </Stack.Navigator>
);

export default OrderStack;
