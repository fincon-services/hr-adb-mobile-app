import { View, Text, Image } from 'react-native';
import React, { memo } from 'react';
import styles from './hoursDetail.style';
import { HourDetailTypes } from './HoursDetail';
import { horizontalScale } from '../../utils/responsive';

const HoursDetailCard = ({ hourItem }: { hourItem: HourDetailTypes }) => {
  const { title, value, icon } = hourItem;
  // Main Return
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardTitleWrapper}>
        <Image source={icon} />
        <Text style={styles.titleTextStyle}>{title}</Text>
      </View>
      <Text style={styles.hourTextStyle}>{value} hr</Text>
    </View>
  );
};

export default memo(HoursDetailCard);
