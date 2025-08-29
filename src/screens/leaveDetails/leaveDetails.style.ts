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
    flex: 1,
    marginTop: verticalScale(15),
    paddingBottom: verticalScale(20),
    paddingHorizontal: horizontalScale(24),
  },
  headerStyle: { paddingHorizontal: horizontalScale(24), marginBottom: 0 },
  screenContent: {
    flex: 1,
    gap: verticalScale(22),
  },
  title: {
    fontFamily: fonts.robotoBold,
    fontSize: fontSizesHelper.large,
    color: Colors.white,
  },
  valueText: {
    fontFamily: fonts.robotoRegular,
    fontSize: fontSizesHelper.medium,
    color: Colors.white,
  },
  // Loader & Leave List
  loaderContainer: {
    // backgroundColor: Colors.white,
    marginTop: verticalScale(10),
    gap: verticalScale(10),
  },
  // Leave Top Card
  leaveCardContainer: {
    borderRadius: 12,
    flexDirection: 'row',
    paddingHorizontal: horizontalScale(25),
    paddingVertical: verticalScale(12),
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: horizontalScale(20),
  },
  leaveDetailWrapper: {
    width: '80%',
    gap: verticalScale(10),
  },
  statusContainer: {
    width: horizontalScale(100),
    borderRadius: 8,
    alignItems: 'center',
    paddingVertical: verticalScale(6),
    paddingHorizontal: horizontalScale(12),
  },
});
export default styles;
