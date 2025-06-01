import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AccountPage from '../components/pages/account';

export type AccountStackParamList = {
  AccountPage: undefined;
  Detail: { id: string };
};

const Stack = createNativeStackNavigator<AccountStackParamList>();

const AccountStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="AccountPage" component={AccountPage} options={{ headerShown: false }}/>
  </Stack.Navigator>
);

export default AccountStack;
