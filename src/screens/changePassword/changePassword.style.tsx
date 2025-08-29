import { StyleSheet } from 'react-native';
import { verticalScale } from '../../utils/responsive';
import { Colors } from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    flex: 1,
    marginTop: verticalScale(18),
    paddingBottom: verticalScale(20),
  },
  inputContainer: {
    backgroundColor: Colors.white,
  },
  inputStyle: {
    // borderWidth: 0.5,
    borderColor: Colors.borderGray,
    borderRadius: 10,
    backgroundColor: Colors.white,
  },
  buttonStyle: { marginTop: verticalScale(25), borderRadius: 10 },
});
export default styles;
