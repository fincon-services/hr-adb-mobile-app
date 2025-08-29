import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';
import { fonts } from '../../constants/fonts';
import {
  fontSizesHelper,
  horizontalScale,
  scale,
  verticalScale,
} from '../../utils/responsive';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: verticalScale(15),
    paddingBottom: verticalScale(20),
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
  // Filter Chips
  filterContainer: {
    height: verticalScale(70),
    backgroundColor: Colors.white,
    paddingVertical: verticalScale(10),
  },
  filterListContent: {
    gap: horizontalScale(10),
    alignItems: 'center',
    paddingHorizontal: horizontalScale(20),
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

  // CHIP style
  chipContainer: {
    paddingHorizontal: horizontalScale(16),
    paddingVertical: verticalScale(10),
    borderRadius: 32,
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: Colors.border10,
    minWidth: horizontalScale(86),
  },
  chipValueSelected: {
    color: Colors.white,
  },
  chipValue: {
    fontFamily: fonts.robotoMedium,
    fontSize: fontSizesHelper.medium,
    color: Colors.textGray10,
  },
  chipSelected: {
    backgroundColor: Colors.themeColor,
    borderColor: Colors.themeColor,
  },
  ///////
  // Search
  searchContainer: {
    backgroundColor: Colors.white,
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(24),
  },
  searchInput: {
    marginTop: 0,
  },

  // Loader & Leave List
  loaderContainer: {
    // backgroundColor: Colors.white,
    marginTop: verticalScale(10),
    gap: verticalScale(10),
  },
  leaveListContent: {
    gap: verticalScale(20),
    paddingHorizontal: horizontalScale(24),
    paddingBottom: verticalScale(100),
    // backgroundColor: Colors.white,
    paddingTop: verticalScale(20),
  },

  // Leave Card
  leaveCard: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    paddingHorizontal: horizontalScale(10),
    paddingVertical: verticalScale(10),
  },

  // LabelValue styles
  titleStyle: {
    color: Colors.black,
    fontSize: fontSizesHelper.medium,
    fontFamily: fonts.robotoBold,
  },
  valueStyle: {
    color: Colors.black,
  },
  valueLeftStyle: {
    fontSize: fontSizesHelper.regular,
    color: Colors.textGray10,
    fontFamily: fonts.robotoRegular,
  },
  leaveRequestButton: {
    margin: scale(10),
  },
});
export default styles;
