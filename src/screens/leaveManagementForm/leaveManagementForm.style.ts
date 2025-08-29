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
    paddingBottom: verticalScale(25),
  },
  headerStyle: { paddingHorizontal: horizontalScale(24), marginBottom: 0 },
  screenContent: {
    flexGrow: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: horizontalScale(24),
    paddingTop: verticalScale(15),
    paddingBottom: verticalScale(50),
  },
  title: {
    fontFamily: fonts.robotoBold,
    fontSize: fontSizesHelper.large,
    color: Colors.white,
  },
  inputWrapper: {
    paddingHorizontal: horizontalScale(24),
    paddingVertical: verticalScale(16),
    // backgroundColor: Colors.white,
    // borderRadius: 24,
  },
  inputContainer: {
    backgroundColor: Colors.white,
    paddingHorizontal: 5,
  },
  inputStyle: {
    borderWidth: 0.5,
    borderColor: Colors.borderGray,
    borderRadius: 10,
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
  },
  InputContainer: {
    height: verticalScale(186),
    backgroundColor: Colors.white,
    borderWidth: 0.2,
    borderColor: Colors.borderGray,
  },
  reasonInputContainer: {
    height: verticalScale(120),
    backgroundColor: Colors.white,
    borderWidth: 0.2,
    borderColor: Colors.borderGray,
  },
  reasonInput: {
    height: verticalScale(120),
    textAlignVertical: 'top',
  },
  // dropdown
  dropDownContainer: { marginTop: verticalScale(18) },
  dropDownStyle: { height: verticalScale(55) },
  errorText: {
    fontFamily: fonts.robotoMedium,
    fontSize: fontSizesHelper.regular,
    marginBottom: verticalScale(6),
    color: Colors.red,
  },
});
export default styles;
