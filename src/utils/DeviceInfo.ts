import { Dimensions, Platform, StatusBar } from 'react-native';

//Dimensions
export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;
export const screenHeight = Dimensions.get('screen').height;
export const screenWidth = Dimensions.get('screen').width;

// Get the height of the status bar based on the platform
export const getStatusBarHeight = () => {
  if (Platform.OS === 'android') {
    return StatusBar.currentHeight || 0;
  } else if (Platform.OS === 'ios') {
    return 20; // Default iOS status bar height
  } else {
    return 0;
  }
};
