import { StyleSheet } from 'react-native';
import {
  fontSizesHelper,
  horizontalScale,
  scale,
  verticalScale,
} from '../../utils/responsive';
import { Colors } from '../../constants/colors';
import { fonts } from '../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    marginTop: verticalScale(15),
    paddingBottom: verticalScale(25),
  },
  screenContent: {
    gap: verticalScale(22),
    paddingTop: verticalScale(22),
  },
  optionContainer: {
    backgroundColor: Colors.white,
    paddingHorizontal: horizontalScale(16),
    paddingVertical: verticalScale(16),
    borderRadius: 16,
    shadowColor: '#18396B',
    shadowOffset: {
      width: 2,
      height: 0,
    },
    shadowOpacity: 0.05, // 0D in hex = ~5% opacity
    shadowRadius: 20,
    elevation: 4, // for Android
  },

  // PROFILE CARD STYLE
  userCardContainer: {
    width: '100%',
    justifyContent: 'flex-end',
    borderRadius: 15,
    height: verticalScale(250),
    paddingHorizontal: horizontalScale(24),
    paddingBottom: verticalScale(30),
    backgroundColor: 'red',
  },
  userAvatarWrapper: {
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'center',
    top: verticalScale(-60),
    gap: verticalScale(10),
  },
  imageWrapper: {
    width: scale(128),
    height: scale(128),
    borderRadius: 100,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: '94%',
    height: '94%',
    alignSelf: 'center',
    borderRadius: 100,
  },
  avatarPlaceHolder: {
    width: scale(40),
    height: scale(40),
    borderRadius: 100,
  },
  editAvatar: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    borderRadius: 100,
    padding: 2,
    backgroundColor: Colors.borderPrimary,
  },
  editIconWrapper: {
    backgroundColor: Colors.themeColor,
    padding: 9,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userName: {
    fontFamily: fonts.robotoBold,
    fontSize: fontSizesHelper.large,
    color: Colors.white,
    textAlign: 'center',
  },
  designationText: {
    fontFamily: fonts.robotoBold,
    fontSize: fontSizesHelper.medium,
    color: Colors.white,
    textAlign: 'center',
  },
  userDetailWrapper: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderPrimary,
    gap: verticalScale(5),
  },
  textContainer: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between',
  },
  headingText: {
    fontFamily: fonts.robotoRegular,
    fontSize: fontSizesHelper.regular,
    color: Colors.white,
  },
  valueText: {
    fontFamily: fonts.robotoBold,
    fontSize: fontSizesHelper.large,
    color: Colors.white,
  },
  /////////// Attendance Report ////////////
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
