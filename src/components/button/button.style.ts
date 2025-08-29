import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';
import { fonts } from '../../constants/fonts';
import {
  fontSizesHelper,
  horizontalScale,
  verticalScale,
} from '../../utils/responsive';

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.themeColor,
    width: '100%',
    height: verticalScale(46),
    borderRadius: 100,
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.white,
    fontSize: fontSizesHelper.medium,
    fontFamily: fonts.robotoSemiBold,
  },
  requestButton: {
    backgroundColor: Colors.themeColor,
    minWidth: '40%',
    alignSelf: 'flex-end',
    gap: horizontalScale(10),
    borderRadius: 7,
    paddingHorizontal: horizontalScale(8),
    paddingVertical: horizontalScale(8),
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  divider: { width: 1, height: '100%', backgroundColor: Colors.white },
});

export default styles;
