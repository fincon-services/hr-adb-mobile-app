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
  container: {
    flex: 1,
    marginTop: verticalScale(15),
    paddingHorizontal: 26,
  },
  topLogoContainer: {
    alignItems: 'center',
    gap: verticalScale(30),
    paddingVertical: verticalScale(10),
  },
  logo: {
    width: horizontalScale(100),
    height: verticalScale(100),
    alignSelf: 'center',
  },
  title: {
    fontSize: fontSizesHelper.regular,
    fontFamily: fonts.robotoRegular,
    color: Colors.black,
    textAlign: 'center',
  },
  detailsTextStyle: {
    fontSize: fontSizesHelper.regular,
    fontFamily: fonts.robotoRegular,
    color: Colors.white,
    textAlign: 'center',
    lineHeight: 22,
    width: '70%',
    marginTop: 15,
  },
  forgotContainer: {
    marginTop: verticalScale(40),
  },
  forgotText: {
    fontSize: fontSizesHelper.title,
    fontFamily: fonts.robotoSemiBold,
    color: Colors.black,
  },
  codeWillNoteText: {
    fontSize: normalizeFont(14),
    fontFamily: fonts.robotoRegular,
    color: Colors.textPrimary,
    textAlign: 'center',
    marginTop: verticalScale(30),
  },
  codeNotSendNoteText: {
    fontSize: normalizeFont(14),
    fontFamily: fonts.robotoRegular,
    color: Colors.textPrimary,
    textAlign: 'center',
    marginTop: verticalScale(100),
  },
  buttonStyle: {
    width: '55%',
    alignSelf: 'center',
    marginTop: verticalScale(47),
  },
});
