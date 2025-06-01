import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import AccountStack from './AccountStack';
import OrderStack from './OrderStack';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStack}/>
      <Tab.Screen name="Orders" component={OrderStack}/>
      <Tab.Screen name="Account" component={AccountStack}/>
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
