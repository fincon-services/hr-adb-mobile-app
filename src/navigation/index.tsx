import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { SafeAreaView, StatusBar, useColorScheme, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import SplashScreen from '../screens/splash/Splash';
import { getToken } from '../store/slices/AuthSlice';
import AppStack from './app/AppStack';
import AuthStack from './auth/AuthStack';
import { navigationRef } from './navigationServices';

const RootNavigation = () => {
  const [showSplash, setShowSplash] = useState(true);
  const isLoggedIn = useSelector(getToken);
  const isDarkMode = useColorScheme() === 'dark';
  console.log(isDarkMode, 'kjfskdjfksjd', isLoggedIn);
  const { top, bottom } = useSafeAreaInsets();
  const handleSplashFinish = () => {
    setShowSplash(false);
  };

  return (
    <SafeAreaView style={{ flex: 1, marginTop: top, paddingBottom: bottom }}>
      <StatusBar
        // barStyle={isDarkMode ? 'dark-content' : 'light-content'}
        barStyle={'dark-content'}
        backgroundColor={'white'}
      />
      {showSplash ? (
        <SplashScreen onFinish={handleSplashFinish} />
      ) : (
        <NavigationContainer ref={navigationRef}>
          {isLoggedIn ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
      )}
    </SafeAreaView>
  );
};

export default RootNavigation;
