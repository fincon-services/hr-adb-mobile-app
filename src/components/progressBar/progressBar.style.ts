import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';
import {
  fontSizesHelper,
  horizontalScale,
  verticalScale,
} from '../../utils/responsive';
import { fonts } from '../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    marginVertical: verticalScale(10),
  },
  labelContainer: {
    alignItems: 'flex-end',
    marginBottom: verticalScale(4),
    paddingRight: horizontalScale(4),
  },
  labelText: {
    fontSize: fontSizesHelper.small,
    color: Colors.black,
    fontFamily: fonts.robotoMedium,
  },
  barBackground: {
    height: verticalScale(10),
    width: '100%',
    backgroundColor: Colors.pink,
    borderRadius: horizontalScale(5),
    overflow: 'hidden',
  },
  barFill: {
    height: '100%',
    backgroundColor: '#006837',
    borderRadius: horizontalScale(5),
  },
});

export default styles;
