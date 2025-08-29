import { StyleSheet } from 'react-native';
import { horizontalScale, verticalScale } from '../../utils/responsive';
import { Colors } from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    marginTop: verticalScale(15),
    paddingBottom: verticalScale(25),
  },
  screenContent: {
    gap: verticalScale(22),
    marginTop: verticalScale(85),
  },
});
export default styles;
