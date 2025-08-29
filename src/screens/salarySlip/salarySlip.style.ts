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
    gap: verticalScale(20),
    marginTop: verticalScale(15),
    paddingBottom: verticalScale(25),
  },
  headerStyle: {
    paddingHorizontal: horizontalScale(24),
    borderBottomWidth: 0,
  },
  screenContent: {
    gap: verticalScale(22),
    marginTop: verticalScale(85),
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
  actionButton: {
    margin: scale(5),
  },
  searchContainer: {
    backgroundColor: Colors.white,
    paddingHorizontal: horizontalScale(24),
    paddingVertical: verticalScale(20),
    gap: verticalScale(25),
  },
  slipText: {
    fontFamily: fonts.robotoMedium,
    fontSize: fontSizesHelper.medium,
    color: Colors.black,
  },
  fileContainer: {
    backgroundColor: Colors.white,
    paddingHorizontal: horizontalScale(30),
    paddingVertical: verticalScale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
export default styles;
