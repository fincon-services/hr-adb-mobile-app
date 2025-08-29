import DateTimePicker from '@react-native-community/datetimepicker';
import React, { useState } from 'react';
import {
  Platform,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AppIcon from '../../components/appIcon/AppIcon';
import Button from '../../components/button/Button';
import CustomTextInput from '../../components/customTextInput/CustomTextInput';
import Header from '../../components/header/Header';
import { icons } from '../../constants/icons';
import { Images } from '../../constants/images';
import { Labels } from '../../constants/labels';
import { goBack, navigate } from '../../navigation/navigationServices';
import { downloadFile } from '../../utils/FileDownloader';
import { Utility } from '../../utils/Utility';
import styles from './salarySlip.style';
import { generatePaySlipPDF } from '../../utils/GeneratePaySlipPDF';
import { usePayrollCheckMutation } from '../../services/appApi/AppApi';
import { useSelector } from 'react-redux';
import { getUser } from '../../store/slices/AuthSlice';
import { User } from '../../types/models/user';
const SalarySlip = () => {
  const userStored: User = useSelector(getUser);
  // API Initialization
  const [payrollCheckAPI, { data: userPayrollData, isLoading }] =
    usePayrollCheckMutation();
  // States
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [monthYear, setMonthYear] = useState<string>();
  const [salarySlip, setSalarySlip] = useState(true);

  // Date Picker Functions
  const openDatePicker = () => {
    setShowDatePicker(true);
  };

  const onDateChange = (event: any, selectedDate?: Date) => {
    if (selectedDate) {
      //   const formattedDate = Utility.getMonthYear(selectedDate);
      const formattedDate = Utility.formatDateToDash(selectedDate);
      setMonthYear(formattedDate);
    }

    // reset value for the date picker
    setShowDatePicker(false);
  };
  //
  const handleDownloadButton = () => {
    generatePaySlipPDF(userPayrollData?.data?.employee_salary);
  };
  console.log(userPayrollData, 'userPayrollData2332');
  //
  const handleSearchSlip = () => {
    const formData = new FormData();
    // formData.append('pay_month', monthYear);
    // formData.append('employee_id', userStored?.employee_id);

    //Testing
    formData.append('employee_id', 139);
    formData.append('pay_month', '2025-02-01');

    console.log(formData);

    payrollCheckAPI(formData)
      .unwrap()
      ?.then(response => {
        console.log(response, 'RESPONSEPAYROLL');
      })
      .catch(error => {
        console.log(error, 'RESPONSEPAYROLLERROR:');
      });
  };
  //Main Return
  return (
    <View style={styles.container}>
      <Header
        leftIcon={Images.goBack}
        rightIcon={Images.activeBellIcon}
        title={Labels.salarSlip}
        additionalStyle={styles.headerStyle}
        onLeftPress={() => goBack()}
        onRightPress={() => navigate('Notifications')}
      />
      <View style={styles.searchContainer}>
        <Pressable
          onPress={() => {
            openDatePicker();
          }}
        >
          <CustomTextInput
            title={'Select Month:'}
            key={'month'}
            id={'month'}
            inputContainerStyle={styles.inputContainer}
            placeholder={'Select Month Here'}
            rightIcon={Images.calendar}
            editable={false}
            // pointerEvents={input?.key === 'date' ? 'none' : 'auto'}
            onChangeText={() => {}}
            value={monthYear}
          />
        </Pressable>
        <Button title="Search" onPress={handleSearchSlip} loading={isLoading} />
      </View>
      {salarySlip ? (
        <View style={styles.fileContainer}>
          <Text style={styles.slipText}>SlipDummy.pdf</Text>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={handleDownloadButton}
          >
            <AppIcon type={icons.type} name={icons.names.download} size={22} />
          </TouchableOpacity>
        </View>
      ) : null}
      {/*  Date Picker  */}
      {showDatePicker && (
        <DateTimePicker
          value={new Date(new Date())}
          mode="date"
          display={Platform.OS === 'ios' ? 'inline' : 'default'}
          onChange={onDateChange}
        />
      )}
    </View>
  );
};

export default SalarySlip;
