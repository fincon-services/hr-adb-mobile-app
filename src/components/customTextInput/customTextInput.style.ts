import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';
import { fonts } from '../../constants/fonts';
import { fontSizesHelper, verticalScale } from '../../utils/responsive';

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    marginTop: verticalScale(16),
  },
  title: {
    fontFamily: fonts.robotoRegular,
    fontSize: fontSizesHelper.regular,
    marginBottom: verticalScale(8),
    color: Colors.black,
  },
  errorText: {
    fontFamily: fonts.robotoMedium,
    fontSize: fontSizesHelper.regular,
    marginBottom: verticalScale(6),
    color: Colors.red,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    height: verticalScale(55),
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: Colors.inputBorderColor,
    backgroundColor: Colors.white,
  },
  input: {
    flex: 1,
    height: verticalScale(55),
    fontFamily: fonts.robotoMedium,
    fontSize: fontSizesHelper.regular,
    color: Colors.black,
  },
  iconWrapper: {
    marginLeft: 10,
  },
});

export default styles;
