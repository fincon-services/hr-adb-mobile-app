import { View, Text, FlatList, ImagePropsBase } from 'react-native';
import React, { useCallback } from 'react';
import HoursDetailCard from './HoursDetailCard';
import { Images } from '../../constants/images';
import { verticalScale } from '../../utils/responsive';
import styles from './hoursDetail.style';
//////
export type HourDetailTypes = {
  title: string;
  value: string | number;
  icon: ImagePropsBase;
};
interface HoursDetailProps {
  hourDetails: HourDetailTypes[];
}

////////
const HoursDetail: React.FC<HoursDetailProps> = ({ hourDetails }) => {
  // Data
  const hoursDetail: HourDetailTypes[] = [
    {
      title: 'Total Shift Hours',
      value: 150.0,
      icon: Images.totalHours,
    },
    {
      title: 'Absent Hours',
      value: 10.0,
      icon: Images.absentHours,
    },
    {
      title: 'Present Hours',
      value: 150.0,
      icon: Images.presentHours,
    },
    {
      title: 'Late Hours',
      value: 5.0,
      icon: Images.lateHours,
    },
  ];

  // UI
  const renderHoursDetailCard = useCallback(
    ({ item }: { item: HourDetailTypes }) => {
      return <HoursDetailCard hourItem={item} />;
    },
    [],
  );
  // Main Return
  return (
    // <FlatList
    //   data={hoursDetail}
    //   contentContainerStyle={{ gap: verticalScale(11), padding: 2 }}
    //   numColumns={2}
    //   renderItem={renderHoursDetailCard}
    // />
    <View style={styles.container}>
      {hoursDetail.map((item, index) => (
        <HoursDetailCard key={index} hourItem={item} />
      ))}
    </View>
  );
};

export default HoursDetail;
