import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';
import { fonts } from '../../constants/fonts';
import {
  fontSizesHelper,
  horizontalScale,
  verticalScale,
} from '../../utils/responsive';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: verticalScale(11),
    padding: 2,
    justifyContent: 'space-between',
  },
  cardContainer: {
    backgroundColor: Colors.white,
    height: verticalScale(125),
    width: '48%',
    paddingVertical: verticalScale(5),
    paddingHorizontal: horizontalScale(14),
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.border10,
    gap: verticalScale(25),
  },
  cardTitleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: horizontalScale(10),
  },
  hourTypeText: {
    color: Colors.white,
    fontSize: fontSizesHelper.medium,
    fontFamily: fonts.robotoSemiBold,
  },
  titleTextStyle: {
    color: Colors.black,
    fontSize: fontSizesHelper.medium,
    fontFamily: fonts.robotoMedium,
  },
  hourTextStyle: {
    color: Colors.black,
    fontSize: fontSizesHelper.large,
    fontFamily: fonts.robotoBold,
  },
});

export default styles;
