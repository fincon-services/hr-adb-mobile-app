import { StyleSheet } from 'react-native';
import { fonts } from '../../constants/fonts';
import {
  fontSizesHelper,
  horizontalScale,
  verticalScale,
} from '../../utils/responsive';
import { Colors } from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  optionView: {
    flexDirection: 'row',
    gap: verticalScale(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    height: verticalScale(32),
    width: horizontalScale(32),
    backgroundColor: Colors.pink10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: fonts.robotoMedium,
    fontSize: fontSizesHelper.medium,
    color: Colors.black,
  },
});
export default styles;
