import { StyleSheet } from 'react-native';
import { fonts } from '../../constants/fonts';
import {
  fontSizesHelper,
  horizontalScale,
  verticalScale,
} from '../../utils/responsive';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 8,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(18),
    paddingVertical: verticalScale(16),
    gap: verticalScale(33),
  },
  dateTopContainer: { flexDirection: 'row', justifyContent: 'space-between' },
  dateContainer: {
    gap: verticalScale(4),
  },
  dateInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: verticalScale(4),
  },
  dateTitle: {
    width: '100%',
    fontFamily: fonts.robotoRegular,
    fontSize: fontSizesHelper.size(14),
  },
  dateText: {
    fontFamily: fonts.robotoBold,
    fontSize: fontSizesHelper.medium,
    textAlign: 'center',
  },
  buttonStyle: {
    alignSelf: 'center',
  },
});
export default styles;
