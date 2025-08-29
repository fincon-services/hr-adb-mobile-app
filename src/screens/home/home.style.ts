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
  /////HOME STYLE////
  container: {
    flexGrow: 1,
    paddingHorizontal: horizontalScale(20),
    paddingTop: verticalScale(20),
  },

  titleText: {
    color: Colors.black,
    fontSize: fontSizesHelper.large,
    fontFamily: fonts.robotoSemiBold,
  },
  /// User Home Card Style
  userHomeCardContainer: {
    borderRadius: 7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(10),
    borderBottomWidth: 0.8,
    borderBottomColor: Colors.borderPrimary,
    paddingVertical: verticalScale(10),
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: horizontalScale(12),
  },
  imageWrapper: {
    padding: scale(2),
    backgroundColor: Colors.white,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: scale(40),
    height: scale(40),
    borderRadius: 100,
    padding: 5,
  },
  avatarPlaceHolder: {
    width: scale(40),
    height: scale(40),
    borderRadius: 100,
    padding: 5,
  },
  userDetailWrapper: {
    justifyContent: 'center',
  },
  name: {
    fontSize: fontSizesHelper.xLarge,
    fontFamily: fonts.robotoBold,
    color: Colors.white,
  },
  icon: {},
  designation: {
    fontSize: fontSizesHelper.size(13),
    fontFamily: fonts.robotoRegular,
    color: Colors.white,
  },

  bellIcon: {
    width: scale(20),
    height: scale(20),
  },

  /// User Attendance Stats Style
  statesContainer: {
    flexDirection: 'row',
    // borderWidth: 1,
    borderColor: '#ddd',
    // borderRadius: 8,
    overflow: 'hidden',
  },
  statItem: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider: {
    borderRightWidth: 1,
    borderRightColor: '#ddd',
  },
  statesTitle: {
    fontSize: fontSizesHelper.medium,
    fontFamily: fonts.robotoMedium,
    color: Colors.black,
    marginBottom: 4,
  },
  value: {
    fontSize: fontSizesHelper.large,
    fontWeight: 'bold',
    color: '#055C7B',
  },
  //
  cardContainer: {
    borderRadius: 12,
    marginTop: verticalScale(17),
    overflow: 'hidden',
    paddingBottom: verticalScale(10),
    backgroundColor: Colors.white,
    gap: verticalScale(5),
  },

  // Month header
  monthHeader: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    gap: horizontalScale(10),
    paddingHorizontal: horizontalScale(12),
    paddingVertical: verticalScale(14),
  },
  monthText: {
    fontFamily: fonts.robotoBold,
    fontSize: fontSizesHelper.xLarge,
    color: Colors.white,
  },
  // Hours
  hoursRow: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: horizontalScale(5),
    paddingHorizontal: horizontalScale(12),
    paddingVertical: verticalScale(15),
    width: '100%',
  },
  hoursItemContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: horizontalScale(5),
    backgroundColor: Colors.white,
    paddingHorizontal: horizontalScale(5),
    paddingVertical: verticalScale(14),
    borderRadius: 6,
    width: '48%',
  },
  hoursItemTitle: {
    fontFamily: fonts.robotoBold,
    fontSize: fontSizesHelper.large,
    color: Colors.black,
  },
  hoursBadge: {
    paddingHorizontal: horizontalScale(15),
    paddingVertical: verticalScale(3),
    borderRadius: 5,
  },
  hoursBadgeText: {
    fontFamily: fonts.robotoRegular,
    fontSize: fontSizesHelper.large,
    color: Colors.white,
  },
  // Stats row
  statsRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: verticalScale(2),
  },
  statDivider: {
    borderRightWidth: 1,
    borderRightColor: Colors.black,
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
  ////////// MENU STYLE ///////////
  menuContainer: {
    paddingVertical: verticalScale(22),
    gap: verticalScale(20),
  },
  menuTitle: {
    fontSize: fontSizesHelper.large,
    fontFamily: fonts.robotoSemiBold,
    color: Colors.black,
  },
  item: {
    flex: 1,
    margin: 5,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
    borderRadius: 6,
  },
  invisible: {
    backgroundColor: 'transparent',
  },
  flatListContainer: {
    gap: verticalScale(20),
    paddingHorizontal: horizontalScale(4),
  },
  rowWrapper: {
    flex: 1,
    justifyContent: 'space-between',
  },
  box: {
    width: horizontalScale(80),
    // height: verticalScale(80),
    borderRadius: 12,
    gap: verticalScale(12),
  },
  emptyBox: {
    width: horizontalScale(80),
  },
  innerBox: {
    height: verticalScale(68),
    width: '100%',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
  menuIcon: {
    width: horizontalScale(22),
    height: verticalScale(22),
  },
  label: {
    fontSize: fontSizesHelper.regular,
    fontFamily: fonts.robotoMedium,
    color: Colors.black,
    textAlign: 'center',
  },
});
export default styles;
