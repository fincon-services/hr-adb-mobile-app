import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';
import { fonts } from '../../constants/fonts';
import {
  fontSizesHelper,
  horizontalScale,
  verticalScale,
} from '../../utils/responsive';

const { width, height } = Dimensions.get('screen');
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    gap: verticalScale(20),
    paddingTop: verticalScale(20),
    paddingHorizontal: horizontalScale(24),
  },
  emailTextStyle: {
    fontSize: fontSizesHelper.regular,
    fontFamily: fonts.robotoBold,
    color: Colors.blue,
    marginTop: 5,
  },
  title: {
    fontFamily: fonts.robotoBold,
    fontSize: fontSizesHelper.title,
    color: Colors.black,
    textAlign: 'center',
  },
  receiveCodeText: {
    fontFamily: fonts.robotoBold,
    fontSize: fontSizesHelper.regular,
    color: Colors.textlightGray,
    textAlign: 'center',
  },
  sendAgainText: {
    fontFamily: fonts.robotoBold,
    fontSize: fontSizesHelper.regular,
    color: Colors.white,
  },
  inCorrectCodeText: {
    fontSize: fontSizesHelper.regular,
    fontFamily: fonts.robotoMedium,
    color: Colors.red,
    textAlign: 'center',
    alignSelf: 'center',
    marginBottom: verticalScale(24),
  },
  sendCodeContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 32,
    gap: 4,
  },

  // CODE Fields styling
  /////////////////////////////////
  codeFieldRoot: {
    height: 65,
    width: '100%',
  },
  cell: {
    height: '100%',
    width: 73.5,
    lineHeight: 60,
    fontSize: 16,
    fontFamily: fonts.robotoBold,
    textAlign: 'center',
    borderRadius: 16,
    color: Colors.black,
    // borderColor: Colors.borderGray,
    borderWidth: 1,
    backgroundColor: Colors.border10,
    overflow: 'hidden',
    // IOS
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.22,
    // shadowRadius: 2.22,

    // // Android
    // elevation: 3,
  },
});
export default styles;
