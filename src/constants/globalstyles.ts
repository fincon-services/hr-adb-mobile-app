import { StyleSheet } from 'react-native';

import { Colors } from './colors';
import { fonts } from './fonts';
import {
  fontSizesHelper,
  horizontalScale,
  verticalScale,
} from '../utils/responsive';

// helpers for spacing
const spacing = (value: number) => ({
  margin: value,
  padding: value,
});
const mT = (value: number) => ({ marginTop: verticalScale(value) });
const mB = (value: number) => ({ marginBottom: verticalScale(value) });
const mL = (value: number) => ({ marginLeft: horizontalScale(value) });
const mR = (value: number) => ({ marginRight: horizontalScale(value) });
const pT = (value: number) => ({ paddingTop: verticalScale(value) });
const pB = (value: number) => ({ paddingBottom: verticalScale(value) });
const pL = (value: number) => ({ paddingLeft: horizontalScale(value) });
const pR = (value: number) => ({ paddingRight: horizontalScale(value) });

const flex = (value: number) => ({ flex: value });
const flexRow = { flexDirection: 'row', alignItems: 'center' };
const flexCenter = { justifyContent: 'center', alignItems: 'center' };

const GlobalStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  authScreenTitle: {
    fontFamily: fonts.robotoSemiBold,
    fontSize: fontSizesHelper.title,
    color: Colors.black,
    textAlign: 'center',
    marginVertical: 12,
  },
  authScreenDetail: {
    fontFamily: fonts.robotoRegular,
    fontSize: 14,
    color: Colors.borderGray,
    textAlign: 'center',
    marginBottom: 20,
  },
  cardShadowStyle: {
    shadowColor: '#000', // base color
    shadowOffset: {
      width: 0,
      height: 0, // same as your CSS (0px 0px)
    },
    shadowOpacity: 0.1, // 1A hex ≈ 10% opacity
    shadowRadius: 15.6, // blur radius
    elevation: 5, // for Android, tweak until it matches
  },
  buttonShadowStyle: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.04, // 0A hex = 10/255 = ~0.04
    shadowRadius: 1,
    elevation: 1, // for Android
  },
  buttonShadowStyle2: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12, // 1F hex = 31/255 ≈ 0.12
    shadowRadius: 8,
    elevation: 1, // for Android
  },
});

// Export helpers + styles
export default {
  ...GlobalStyle,
  flex,
  flexRow,
  flexCenter,
  spacing,
  mT,
  mB,
  mL,
  mR,
  pT,
  pB,
  pL,
  pR,
};
