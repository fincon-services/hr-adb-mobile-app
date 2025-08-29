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
    width: '100%',
  },
  title: {
    fontFamily: fonts.robotoMedium,
    fontSize: fontSizesHelper.regular,
    lineHeight: 14,
    marginBottom: verticalScale(10),
  },
  dropdown: {
    backgroundColor: Colors.white,
    borderWidth: 0.5,
    borderColor: Colors.borderGray,
    borderRadius: 10,
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(20),
    height: verticalScale(40),
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropdownList: {
    marginTop: 5,
    borderWidth: 0.2,
    borderColor: '#565656',
    borderRadius: 10,
    backgroundColor: 'white',
    maxHeight: 150,
  },
  dropdownItem: {
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(20),
  },
});

export default styles;
