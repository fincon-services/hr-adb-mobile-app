import React, { memo } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import LinearGradientWrapper from '../../components/linearGradientWrapper/LinearGradientWrapper';
import globalstyles from '../../constants/globalstyles';
import { Images } from '../../constants/images';
import styles from './home.style';

interface UserStat {
  title: string;
  value: number;
}

interface UserStatsRowProps {
  data: UserStat[];
}
const UserAttendanceStats = () => {
  // Data
  const userState: UserStat[] = [
    { title: 'Present', value: 27 },
    { title: 'Leave', value: 2 },
    { title: 'Absent', value: 1 },
  ];

  // Hours Item Component UI
  const HoursItem = (title: string, hours: string) => (
    <View style={styles.hoursItemContainer}>
      <Text style={styles.hoursItemTitle}>{title}</Text>
      <LinearGradientWrapper direction="leftToRight" style={styles.hoursBadge}>
        <Text style={styles.hoursBadgeText}>{hours}</Text>
      </LinearGradientWrapper>
    </View>
  );

  // User Stats Row Component UI
  const UserStatsRow: React.FC<UserStatsRowProps> = ({ data }) => {
    return (
      <View style={styles.statsRowContainer}>
        {data?.map((item: UserStat, index: number) => (
          <View
            key={index}
            style={[
              styles.statItem,
              index !== data.length - 1 && styles.statDivider,
            ]}
          >
            <Text style={styles.statTitle}>{item.title}</Text>
            <Text style={styles.statValue}>{item.value}</Text>
          </View>
        ))}
      </View>
    );
  };

  /// Main Return
  return (
    <View style={[styles.cardContainer, globalstyles.cardShadowStyle]}>
      <LinearGradientWrapper direction="leftToRight">
        {/* Month Picker Header */}
        <TouchableOpacity style={styles.monthHeader}>
          <Text style={styles.monthText}>August 2025</Text>
          <Image source={Images.whiteDownArrow} />
        </TouchableOpacity>

        {/* Hours Row */}
        <View style={styles.hoursRow}>
          {HoursItem('Total Hours', '08  :  45')}
          {HoursItem('Absent Hours', '03  :  10')}
        </View>
      </LinearGradientWrapper>
      {/* Stats */}
      <UserStatsRow data={userState} />
    </View>
  );
};

export default memo(UserAttendanceStats);
