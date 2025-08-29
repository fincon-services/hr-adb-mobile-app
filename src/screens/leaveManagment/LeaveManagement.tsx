import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useMemo, useState } from 'react';
import {
  Alert,
  FlatList,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import RequestButton from '../../components/button/RequestButton';
import CustomTextInput from '../../components/customTextInput/CustomTextInput';
import Header from '../../components/header/Header';
import LabelValue from '../../components/labelValue/LabelValue';
import Loader from '../../components/loader/Loader';
import globalstyles from '../../constants/globalstyles';
import { Images } from '../../constants/images';
import { Labels } from '../../constants/labels';
import { goBack, navigate } from '../../navigation/navigationServices';
import { useLazyGetLeavesQuery } from '../../services/appApi/AppApi';
import {
  LeaveBalanceItem,
  LeaveItem,
  LeaveType,
} from '../../types/models/lists';
import { Utility } from '../../utils/Utility';
import styles from './leaveManagement.style';

interface ChipItem {
  key: string;
  value: string;
}

const LeaveManagement = () => {
  // API
  // const { data: leavesListDetail, isLoading } = useGetLeavesQuery('');
  const [getLeavesAPI, { data: leavesListDetail, isLoading }] =
    useLazyGetLeavesQuery();

  useFocusEffect(
    useCallback(() => {
      getLeavesAPI('');
    }, []),
  );
  // States
  const [filterValue, setFilterValue] = useState<ChipItem>({
    key: 'all',
    value: 'All',
  });
  const [searchQuery, setSearchQuery] = useState('');

  // Leaves List of current User
  const leavesList: LeaveItem[] = leavesListDetail?.data?.leaveList ?? [];

  // Leave Types (needed for requesting a leave )
  const leaveTypes: LeaveType[] =
    leavesListDetail?.data?.leave_date.leave_types ?? [];

  const leaveBalance: LeaveBalanceItem[] =
    leavesListDetail?.data?.leave_date?.leave_balance[0]?.leave_balances ?? [];

  // Filter Data
  const filterData = [
    {
      key: 'all',
      value: 'All',
    },
    {
      key: 'maternity',
      value: 'Maternity',
    },
    {
      key: 'annual',
      value: 'Annual',
    },
    {
      key: 'bereavement',
      value: 'Bereavement',
    },
    {
      key: 'casual',
      value: 'Casual',
    },
    {
      key: 'urgent',
      value: 'Urgent',
    },
    {
      key: 'medical',
      value: 'Medical',
    },
  ];

  // Filtered List of Leaves
  const filteredLeaves = useMemo(() => {
    let data = leavesList;
    // for filter
    if (filterValue?.value !== 'All') {
      data = data.filter(
        item =>
          item?.leave_type?.name?.toLowerCase() ===
          filterValue?.value.toLowerCase(),
      );
    }
    // for local search
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      data = data.filter(
        item =>
          item?.employee_name?.toLowerCase().includes(query) ||
          item?.leave_type?.name?.toLowerCase().includes(query) ||
          item?.reason?.toLowerCase().includes(query),
      );
    }

    return data;
  }, [leavesList, filterValue, searchQuery]);

  // handle leave request
  const handleLeaveRequest = () => {
    navigate('LeaveManagementForm', {
      leaveTypeLists: leaveTypes,
      leave_balance: leaveBalance,
    });
  };

  const renderChipItem = useCallback(
    ({ item }: { item: ChipItem }) => {
      const isSelected = item?.key === filterValue?.key;
      return (
        <TouchableOpacity
          onPress={() => setFilterValue(item)}
          style={[styles.chipContainer, isSelected && styles.chipSelected]}
        >
          <Text
            style={[styles.chipValue, isSelected && styles.chipValueSelected]}
          >
            {item?.value}
          </Text>
        </TouchableOpacity>
      );
    },
    [filterValue],
  );

  const renderLeaveListItem = useCallback(({ item }: { item: LeaveItem }) => {
    const { start_date, end_date, leave_type, approval_status, days, id } =
      item || {};

    const leaveStatus = Utility.getLeaveStatus(approval_status);
    ///
    return (
      <Pressable
        style={[styles.leaveCard, globalstyles.cardShadowStyle]}
        onPress={() => navigate('LeaveDetails', { leaveId: id })}
      >
        <LabelValue
          titleLeft={leave_type?.name}
          valueLeft={days}
          valueRight={`${start_date} - ${end_date}`}
          titleRight={leaveStatus?.name}
          valueStyle={styles.valueStyle}
          titleStyle={styles.titleStyle}
          valueRightStyle={styles.valueLeftStyle}
          titleRightStyle={{ color: leaveStatus?.color }}
        />
      </Pressable>
    );
  }, []);

  // Main Return
  return (
    <View style={styles.container}>
      <Header
        leftIcon={Images.goBack}
        rightIcon={Images.nonActiveNotificationIcon}
        title={Labels.leaveManagement}
        onLeftPress={() => goBack()}
        onRightPress={() => navigate('Notifications')}
        additionalStyle={styles.headerStyle}
      />
      {/* <View style={styles.screenContent}> */}
      <Loader loading={isLoading} styleContainer={styles.loaderContainer}>
        <RequestButton
          buttonStyle={styles.leaveRequestButton}
          title="Leave Request"
          onPress={handleLeaveRequest}
        />

        <View style={styles.filterContainer}>
          <FlatList
            horizontal
            data={filterData}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.filterListContent}
            renderItem={renderChipItem}
          />
        </View>
        <View style={styles.searchContainer}>
          <CustomTextInput
            placeholder="Search your leave"
            containerStyle={styles.searchInput}
            rightIcon={Images.searchIcon}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
        {/* </View> */}

        <FlatList
          data={filteredLeaves}
          contentContainerStyle={styles.leaveListContent}
          renderItem={renderLeaveListItem}
        />
      </Loader>
      {/* </View> */}
    </View>
  );
};

export default LeaveManagement;
