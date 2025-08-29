import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';
import {
  fontSizesHelper,
  horizontalScale,
  verticalScale,
} from '../../utils/responsive';
import { fonts } from '../../constants/fonts';

const styles = StyleSheet.create({
  topContainer: { gap: verticalScale(10), paddingVertical: verticalScale(15) },
  groupContainer: {
    gap: horizontalScale(12),
    alignItems: 'center',
  },
  titleStyle: {
    fontSize: fontSizesHelper.regular,
    fontFamily: fonts.robotoRegular,
    color: Colors.textPrimary,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: horizontalScale(8),
  },
  radioOuter: {
    width: horizontalScale(17),
    height: verticalScale(18),
    borderRadius: 17,
    borderWidth: 2,
    borderColor: Colors.borderGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioOuterSelected: {
    borderWidth: 5,
    borderColor: Colors.themeColor,
  },
  radioInner: {
    width: horizontalScale(9),
    height: verticalScale(9),
    borderRadius: 9 / 2,
  },
  label: {
    fontSize: fontSizesHelper.regular,
    fontFamily: fonts.robotoRegular,
    color: Colors.textPrimary,
  },
});

export default styles;
