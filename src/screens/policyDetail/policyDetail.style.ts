import { StyleSheet } from 'react-native';
import {
  fontSizesHelper,
  horizontalScale,
  verticalScale,
} from '../../utils/responsive';
import { Colors } from '../../constants/colors';
import { fonts } from '../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: verticalScale(15),
    paddingBottom: verticalScale(25),
    paddingHorizontal: horizontalScale(24),
  },
  screenContent: {
    flex: 1,
    gap: verticalScale(22),
    paddingTop: verticalScale(22),
    backgroundColor: Colors.white,
    paddingHorizontal: 24,
  },
  title: {
    fontFamily: fonts.robotoBold,
    fontSize: fontSizesHelper.large,
    color: Colors.white,
  },
  // Policy Main Card
  policyCardContainer: {
    borderRadius: 12,
    flexDirection: 'row',
    paddingHorizontal: horizontalScale(25),
    paddingVertical: verticalScale(12),
    justifyContent: 'space-between',
  },
  detailWrapper: {
    gap: verticalScale(5),
    paddingBottom: verticalScale(15),
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headingText: {
    fontFamily: fonts.robotoRegular,
    fontSize: fontSizesHelper.regular,
    color: Colors.white,
  },
  valueText: {
    fontFamily: fonts.robotoBold,
    fontSize: fontSizesHelper.medium,
    color: Colors.white,
  },
});
export default styles;
