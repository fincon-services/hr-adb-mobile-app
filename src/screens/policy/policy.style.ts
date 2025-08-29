import { StyleSheet } from 'react-native';
import {
  fontSizesHelper,
  horizontalScale,
  scale,
  verticalScale,
} from '../../utils/responsive';
import { Colors } from '../../constants/colors';
import { fonts } from '../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: verticalScale(15),
    paddingBottom: verticalScale(25),
  },
  headerStyle: { paddingHorizontal: horizontalScale(24), marginBottom: 0 },
  screenContent: {
    flexGrow: 1,
    gap: verticalScale(22),
    paddingTop: verticalScale(22),
    backgroundColor: Colors.white,
    paddingHorizontal: horizontalScale(24),
    paddingBottom: verticalScale(100),
  },
  cardContainer: {
    flexDirection: 'row',
    paddingHorizontal: horizontalScale(12),
    paddingVertical: verticalScale(15),
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: Colors.borderGray,
    borderRadius: 6,
    backgroundColor: Colors.white,
  },
  leftSection: {
    width: '65%',
    flexDirection: 'row',
    gap: horizontalScale(15),
    alignItems: 'center',
  },
  rightSection: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 4,
  },
  actionButton: {
    margin: scale(5),
  },
  titleText: {
    fontFamily: fonts.robotoBold,
    fontSize: fontSizesHelper.regular,
  },
  // Policy Main Card
  title: {
    fontFamily: fonts.robotoBold,
    fontSize: fontSizesHelper.large,
    color: Colors.white,
  },
  policyCardContainer: {
    borderRadius: 12,
    flexDirection: 'row',
    paddingHorizontal: horizontalScale(12),
    paddingVertical: verticalScale(12),
    justifyContent: 'space-between',
  },
  detailWrapper: {
    gap: verticalScale(5),
    paddingBottom: verticalScale(15),
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headingText: {
    fontFamily: fonts.robotoRegular,
    fontSize: fontSizesHelper.regular,
    color: Colors.white,
  },
  valueText: {
    fontFamily: fonts.robotoBold,
    fontSize: fontSizesHelper.medium,
    color: Colors.white,
  },
});

export default styles;
