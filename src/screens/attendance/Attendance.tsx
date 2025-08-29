import { View, Text, ScrollView } from 'react-native';
import React, { useMemo, useState } from 'react';
import styles from './attendance.style';
import Header from '../../components/header/Header';
import { Images } from '../../constants/images';
import { goBack, navigate } from '../../navigation/navigationServices';
import { Labels } from '../../constants/labels';
import ToggleButtons from '../../components/toggleButtons/ToggleButtons';
import DateRangeFilter from '../../components/dateRangeFilter/DateRangeFilter';
import MonthlyAttendance from './MonthlyAttendance';
import { useDispatch } from 'react-redux';
import HoursDetail from '../../components/hoursDetails/HoursDetail';

const Attendance = () => {
  // API initializing
  const dispatch = useDispatch();

  const [selectedToggle, setSelectedToggle] = useState<string | number>(
    'monthlyAttendance',
  );
  const toggleButton = useMemo(
    () => [
      {
        key: 'monthlyAttendance',
        title: 'Monthly Attendance',
        value: 'Monthly Attendance',
      },
      { key: 'leaves', title: 'Leaves', value: 'Leaves' },
    ],
    [],
  );

  // Toggle Button Handler
  const handleToggleButton = (key: string | number) => {
    setSelectedToggle(key);
    console.log('Selected Toggle:', key);
  };
  //
  const handleDateSearch = (fromDate: Date | null, toDate: Date | null) => {
    // Call API Here
  };
  /// MAIN RETURN
  return (
    <View style={styles.container}>
      <Header
        leftIcon={Images.goBack}
        rightIcon={Images.activeBellIcon}
        title={Labels.attendance}
        onLeftPress={() => goBack()}
        onRightPress={() => navigate('Notifications')}
      />
      <ScrollView
        contentContainerStyle={styles.screenContent}
        showsVerticalScrollIndicator={false}
      >
        {/* REVERT FOR NOW */}
        <ToggleButtons
          buttonsArray={toggleButton}
          onPressButton={handleToggleButton}
          selectedButton={selectedToggle}
        />
        <DateRangeFilter onSearch={handleDateSearch} />
        <HoursDetail hourDetails={[]} />
        <MonthlyAttendance />
      </ScrollView>
    </View>
  );
};

export default Attendance;
