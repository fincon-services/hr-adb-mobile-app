import DateTimePicker from '@react-native-community/datetimepicker';
import React, { memo, useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { Images } from '../../constants/images';
import { Labels } from '../../constants/labels';
import Button from '../button/Button';
import styles from './dateRange.style';

type DateKey = 'from' | 'to';

interface DateRangeProps {
  onSearch: (fromDate: Date, toDate: Date) => void;
}

const getStartOfMonth = () => {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), 1);
};

const getToday = () => new Date();

const DateRangeFilter: React.FC<DateRangeProps> = ({ onSearch }) => {
  const [dates, setDates] = useState({
    from: getStartOfMonth(),
    to: getToday(),
  });

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedKey, setSelectedKey] = useState<DateKey | null>(null);

  const handleDateChange = (event: any, selectedDate?: Date) => {
    setShowDatePicker(false);
    if (selectedDate && selectedKey) {
      setDates(prev => ({ ...prev, [selectedKey]: selectedDate }));
    }
  };

  const handleSearch = () => {
    onSearch(dates.from, dates.to);
  };

  const openDatePicker = (key: DateKey) => {
    setSelectedKey(key);
    setShowDatePicker(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.dateTopContainer}>
        {/* From Date */}
        <View style={styles.dateContainer}>
          <Text style={styles.dateTitle}>{Labels.fromDate}</Text>
          <Pressable
            onPress={() => openDatePicker('from')}
            style={styles.dateInnerContainer}
          >
            <Text style={styles.dateText}>{dates.from.toDateString()}</Text>
            <Image source={Images.dropDownArrow} />
          </Pressable>
        </View>

        {/* To Date */}
        <View style={styles.dateContainer}>
          <Text style={styles.dateTitle}>{Labels.toDate}</Text>
          <Pressable
            onPress={() => openDatePicker('to')}
            style={styles.dateInnerContainer}
          >
            <Text style={styles.dateText}>{dates.to.toDateString()}</Text>
            <Image source={Images.dropDownArrow} />
          </Pressable>
        </View>
      </View>

      <Button
        title={Labels.search}
        loading={false}
        onPress={handleSearch}
        buttonStyle={styles.buttonStyle}
      />
      {/* Date Picker */}
      {showDatePicker && (
        <DateTimePicker
          value={dates[selectedKey || 'from']}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}
    </View>
  );
};

export default memo(DateRangeFilter);
