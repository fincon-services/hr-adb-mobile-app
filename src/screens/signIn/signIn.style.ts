import { StyleSheet } from 'react-native';
import { screenHeight } from '../../utils/DeviceInfo';
import { fonts } from '../../constants/fonts';
import {
  fontSizesHelper,
  horizontalScale,
  normalizeFont,
  verticalScale,
} from '../../utils/responsive';
import { Colors } from '../../constants/colors';

export const styles = StyleSheet.create({
  topContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.themeColor,
    paddingHorizontal: horizontalScale(24),
    justifyContent: 'center',
    gap: verticalScale(36),
  },
  logo: {
    width: horizontalScale(241),
    height: verticalScale(128),
    alignSelf: 'center',
  },
  signInContainer: {
    paddingHorizontal: horizontalScale(24),
    paddingVertical: verticalScale(16),
    backgroundColor: Colors.white,
    borderRadius: 24,
  },
  signInText: {
    fontSize: fontSizesHelper.title,
    fontFamily: fonts.robotoSemiBold,
    color: Colors.black,
    alignSelf: 'center',
  },
  forgotPasswordText: {
    fontSize: normalizeFont(14),
    fontFamily: fonts.robotoMedium,
    color: Colors.themeColor,
    textAlign: 'right',
    marginTop: verticalScale(16),
  },
  buttonStyle: {
    width: '100%',
    alignSelf: 'center',
    marginTop: verticalScale(47),
  },
});
