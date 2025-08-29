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
    backgroundColor: Colors.white,
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(15),
    borderRadius: 12,
  },
  infoTitle: {
    fontSize: fontSizesHelper.large,
    fontFamily: fonts.robotoBold,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingTop: verticalScale(10),
    paddingBottom: verticalScale(4),
    borderBottomWidth: 1,
    borderBottomColor: Colors.border20,
  },
  detailTitle: {
    fontSize: fontSizesHelper.regular,
    fontFamily: fonts.robotoRegular,
  },
  detailValue: {
    fontSize: fontSizesHelper.regular,
    fontFamily: fonts.robotoMedium,
    width: '70%',
    textAlign: 'right',
  },
});
export default styles;
