import { PixelRatio, Platform } from 'react-native';
import { deviceHeight, deviceWidth } from './DeviceInfo';

// Reference screen sizes (you can adjust if you have a different base design size)
// these below values(width,height) are from the frame of the figma design.
const guidelineBaseWidth = 414;
const guidelineBaseHeight = 896;

/*  Logic Notes for Responsive UI

 *  Const design's width and height on which design is created.(figma,xd) 
 *  Width formula: '(currentDeviceWidth/designScreenWidth)*sizeOfContainerInWidth' (size will be container width)
 *  2nd width formula: '(currentDeviceWidth*sizeOfContainerInWidth)/designScreenWidth'
 *  Height formula: '(currentDeviceHeight/designScreenHeight)*sizeOfContainerInHeight' (size will be container height)
 *  2nd Height formula: '(currentDeviceHeight*sizeOfContainerInHeight)/designScreenHeight'
 */

// Horizontal scale based on screen width
export const scale = (size: number) =>
  (deviceWidth / guidelineBaseWidth) * size;

// Vertical scale based on screen height
export const verticalScale = (size: number) =>
  (deviceHeight / guidelineBaseHeight) * size;
export const horizontalScale = (size: number) =>
  (deviceWidth / guidelineBaseWidth) * size;
// Moderate scale: for font sizes that need a balance between height and width scaling
const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

/**
 * Normalize font size based on screen and pixel ratio.
 */
export const normalizeFont = (size: number): number => {
  const newSize = scale(size);
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 1;
  }
};

/**
 * Normalize margin based on screen size.
 */
export const normalizeMargin = (size: number): number => {
  return Math.round(scale(size));
};

/**
 * Normalize padding based on screen size.
 */
export const normalizePadding = (size: number): number => {
  return Math.round(scale(size));
};

/**
 * Normalize spacing (can be used as gap, spacing, etc.).
 */
export const normalizeSpacing = (size: number): number => {
  return Math.round(scale(size));
};

/**
 * For more advanced cases (e.g., responsive radius, lineHeight, etc.),
 * add functions like below:
 */
export const normalizeRadius = (radius: number): number => {
  return Math.round(moderateScale(radius));
};

export const normalizeLineHeight = (fontSize: number): number => {
  return Math.round(moderateScale(fontSize) * 1.2);
};

export const fontSizesHelper = {
  small: normalizeFont(12),
  regular: normalizeFont(14),
  medium: normalizeFont(16),
  large: normalizeFont(18),
  xLarge: normalizeFont(20),
  title: normalizeFont(22),
  heading: normalizeFont(28),
  size: (size: number) => normalizeFont(size),
};
