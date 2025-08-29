import { StyleSheet } from 'react-native';
import { fonts } from '../../constants/fonts';
import { fontSizesHelper } from '../../utils/responsive';
import { Colors } from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.border10,
    marginBottom: 20,
    paddingBottom: 10,
  },
  leftContainer: { width: 50 },
  title: {
    flex: 1,
    fontFamily: fonts.robotoMedium,
    fontSize: fontSizesHelper.medium,
    color: Colors.black,
    textAlign: 'center',
  },
  rightContainer: { width: 50, alignItems: 'flex-end' },
});
export default styles;
