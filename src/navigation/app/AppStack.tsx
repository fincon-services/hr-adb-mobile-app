import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { AppStackParamList } from '../navigationTypes';
import { appRoutes } from './appRoutes';

const AppNavigatorStack = createNativeStackNavigator<AppStackParamList>();
const AppStack = () => {
  return (
    <AppNavigatorStack.Navigator initialRouteName="Home">
      {/* Routes */}
      {appRoutes.map(route => (
        <AppNavigatorStack.Screen
          key={route?.name}
          name={route?.name as never}
          component={route?.component as never}
          options={{
            headerShown: false,
            animation: 'slide_from_right',
          }}
        />
      ))}
    </AppNavigatorStack.Navigator>
  );
};

export default AppStack;
