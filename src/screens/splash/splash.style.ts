import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';
import { fonts } from '../../constants/fonts';
import { fontSizesHelper, verticalScale } from '../../utils/responsive';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.themeColor,
    alignItems: 'center',
    justifyContent: 'center',
    gap: verticalScale(20),
  },
  logo: {
    width: 206,
    height: 228,
  },
  title: {
    fontSize: fontSizesHelper.title,
    color: Colors.black,
    fontFamily: fonts.robotoSemiBold,
  },
});

export default styles;
