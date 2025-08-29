import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { AuthStackParamList } from '../navigationTypes';
import { authRoutes } from './authRoutes';

const AuthNavigatorStack = createNativeStackNavigator<AuthStackParamList>();
const AuthStack = () => {
  return (
    <AuthNavigatorStack.Navigator initialRouteName={'SignIn'}>
      {authRoutes?.map(route => (
        <AuthNavigatorStack.Screen
          key={route?.name}
          name={route?.name as never}
          component={route?.component}
          options={{
            headerShown: false,
            animation: 'default',
          }}
        />
      ))}
    </AuthNavigatorStack.Navigator>
  );
};

export default AuthStack;
