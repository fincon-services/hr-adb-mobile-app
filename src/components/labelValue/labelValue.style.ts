import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';
import { fonts } from '../../constants/fonts';
import { fontSizesHelper, verticalScale } from '../../utils/responsive';

const styles = StyleSheet.create({
  title: {
    fontFamily: fonts.robotoBold,
    fontSize: fontSizesHelper.large,
    color: Colors.white,
  },
  detailWrapper: {
    gap: verticalScale(10),
    paddingBottom: verticalScale(10),
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
