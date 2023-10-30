import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '@/screens/Home/Home';

const Stack = createStackNavigator();

// @refresh reset
const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
