import { StyleSheet } from 'react-native';
import {
  fontSizesHelper,
  horizontalScale,
  verticalScale,
} from '../../utils/responsive';
import { fonts } from '../../constants/fonts';
import { Colors } from '../../constants/colors';

const styles = StyleSheet.create({
  container: { marginVertical: 10, gap: verticalScale(20) },
  button: {
    width: '100%',
    height: verticalScale(120),
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(16),
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'dashed',
  },
  attachText: {
    color: Colors.textPrimary,
    fontSize: fontSizesHelper.regular,
    fontFamily: fonts.robotoBold,
  },
  fileSizeText: {
    color: Colors.textGray10,
    fontSize: fontSizesHelper.regular,
    fontFamily: fonts.robotoRegular,
  },
  fileInfo: {
    marginTop: 8,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  fileName: { flex: 1, fontSize: 13, color: '#222' },
  fileSize: { fontSize: 12, color: '#666' },
  remove: { color: 'red', fontSize: 16, marginLeft: 6 },
});

export default styles;
