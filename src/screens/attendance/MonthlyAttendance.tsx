import React, { memo } from 'react';
import { Text, View } from 'react-native';
import { Colors } from '../../constants/colors';
import styles from './attendance.style';

interface UserAttendanceStat {
  title: string;
  value: number;
  titleColor: string;
}
interface UserStatsRowProps {
  data: UserAttendanceStat[];
}
const MonthlyAttendance = () => {
  // Attendance Data
  const userAttendanceState: {
    data1: UserAttendanceStat[];
    data2: UserAttendanceStat[];
  } = {
    data1: [
      { title: 'Present', value: 27, titleColor: Colors.red },
      { title: 'Leave', value: 2, titleColor: Colors.green10 },
      { title: 'Absent', value: 1, titleColor: Colors.textlightGray },
    ],
    data2: [
      { title: 'Present', value: 27, titleColor: Colors.red },
      { title: 'Leave', value: 2, titleColor: Colors.red },
      { title: 'Absent', value: 1, titleColor: Colors.red },
    ],
  };

  // User Attendace Stats Row Component UI
  const UserAttendanceStatsRow: React.FC<UserStatsRowProps> = ({ data }) => {
    return (
      <View style={styles.statsRowContainer}>
        {data?.map((item: UserAttendanceStat, index: number) => (
          <View
            key={index}
            style={[
              styles.statItem,
              index !== data.length - 1 && styles.statDivider,
            ]}
          >
            <Text style={[styles.statTitle]}>{item.title}</Text>
            <Text style={[styles.statValue, { color: item?.titleColor }]}>
              {item.value}
            </Text>
          </View>
        ))}
      </View>
    );
  };

  // Main Return
  return (
    <View style={styles.attendanceTopContainer}>
      <Text style={styles.attendanceTitle}>Attendance Report</Text>
      <UserAttendanceStatsRow data={userAttendanceState?.data1} />
      <UserAttendanceStatsRow data={userAttendanceState?.data2} />
    </View>
  );
};

export default memo(MonthlyAttendance);
