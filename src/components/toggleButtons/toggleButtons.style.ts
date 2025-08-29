import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';
import { fonts } from '../../constants/fonts';
import { fontSizesHelper } from '../../utils/responsive';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 32,
    backgroundColor: Colors.buttonBackgroundColor,
    paddingHorizontal: 6,
    paddingVertical: 6,
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
    height: 34,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: fonts.robotoMedium,
    fontSize: fontSizesHelper.regular,
    color: Colors.black,
  },
});

export default styles;
