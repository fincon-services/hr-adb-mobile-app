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
    paddingHorizontal: 24,
    marginTop: verticalScale(15),
  },
  screenContent: {
    paddingBottom: verticalScale(50),
    gap: verticalScale(20),
  },
  /////////// Attendance Report ////////////

  attendanceTopContainer: {
    gap: verticalScale(20),
    paddingHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(20),
    backgroundColor: Colors.themeColor,
    borderRadius: 12,
  },
  attendanceTitle: {
    fontFamily: fonts.robotoBold,
    fontSize: fontSizesHelper.medium,
    color: Colors.white,
    alignSelf: 'center',
  },

  // Stats row
  statsRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: verticalScale(5),
    backgroundColor: Colors.white,
    borderRadius: 8,
  },
  statDivider: {
    borderRightWidth: 1,
    borderRightColor: Colors.black,
  },
  statItem: {
    flex: 1,
    paddingVertical: verticalScale(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  statTitle: {
    fontFamily: fonts.robotoMedium,
    fontSize: fontSizesHelper.medium,
    color: Colors.black,
  },
  statValue: {
    fontFamily: fonts.robotoBold,
    fontSize: fontSizesHelper.title,
    color: Colors.textThemeColor,
  },
});
export default styles;
