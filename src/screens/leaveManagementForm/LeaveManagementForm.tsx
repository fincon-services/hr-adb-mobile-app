import DateTimePicker from '@react-native-community/datetimepicker';
import { RouteProp } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import AppToast from '../../components/appToast/AppToast';
import AttachFile from '../../components/attachFile/AttachFile';
import Button from '../../components/button/Button';
import CustomDropdown, {
  DropdownItem,
} from '../../components/customDropdown/CustomDropdown';
import CustomTextInput from '../../components/customTextInput/CustomTextInput';
import Header from '../../components/header/Header';
import RadioButton from '../../components/radioButton/RadioButton';
import { Images } from '../../constants/images';
import { Labels } from '../../constants/labels';
import { goBack, navigate } from '../../navigation/navigationServices';
import { AppStackParamList } from '../../navigation/navigationTypes';
import { useAddLeaveRequestMutation } from '../../services/appApi/AppApi';
import { getUser } from '../../store/slices/AuthSlice';
import { LeaveFormValues } from '../../types/models/inputsTypes';
import { LeaveBalanceItem } from '../../types/models/lists';
import { User } from '../../types/models/user';
import styles from './leaveManagementForm.style';

interface LeaveManagementProps {
  route: RouteProp<AppStackParamList, 'LeaveManagementForm'>;
}
const LeaveManagementForm: React.FC<LeaveManagementProps> = ({ route }) => {
  //
  const { leaveTypeLists, leave_balance } = route?.params;
  const userStored: User = useSelector(getUser);
  console.log(userStored, 'ksjdfksdjfksdjf');
  //API initializing
  const [addLeaveRequest, { data: leaveRequest, isLoading }] =
    useAddLeaveRequestMutation();

  //Const
  const dispatch = useDispatch();

  //States

  const [dropDownValues, setDropDownValues] = useState<{
    leaveType: DropdownItem;
  }>({
    leaveType: {
      id: '',
      value: '',
      label: '',
    },
  });

  const [inputValues, setInputValues] = useState<LeaveFormValues>({
    leaveBalance: '',
    startDate: '',
    endDate: '',
    days: '',
    dayType: '',
    leaveType: '',
    reason: '',
    attachment: {
      uri: '',
      type: '',
      name: '',
      size: 0,
    },
  });
  const [inputsError, setInputsError] = useState<LeaveFormValues>({
    leaveBalance: '',
    startDate: '',
    endDate: '',
    days: '',
    dayType: '',
    leaveType: '',
    reason: '',
    attachment: {
      uri: '',
      type: '',
      name: '',
      size: 0,
    },
  });

  const [showDatePicker, setShowDatePicker] = useState({
    key: '',
    show: false,
  });

  const leaveTypesDropDownData =
    leave_balance?.map((item: LeaveBalanceItem) => {
      return {
        id: item?.leave_type_id,
        label: item?.leave_type,
        value: Number(item?.leave_balance).toFixed(0),
      };
    }) || [];

  //Functions

  // Handle Apply For Leave API
  const handleApplyLeave = () => {
    const {
      leaveBalance,
      leaveType,
      startDate,
      endDate,
      days,
      reason,
      attachment,
    } = inputValues;

    //  Check leave balance
    if (Number(leaveBalance) <= 0) {
      Alert.alert('No Leave Balance');
      return;
    }

    //  Check required fields
    if (!leaveType) {
      Alert.alert('Validation Error', 'Please select leave type');
      return;
    }
    if (!startDate || !endDate) {
      Alert.alert('Validation Error', 'Please select start and end date');
      return;
    }
    // Validate dates
    const start = new Date(startDate);
    const end = new Date(endDate);
    if (start > end) {
      Alert.alert('Validation Error', 'End date cannot be before start date');
      return;
    }

    // Validate days
    if (!days || Number(days) <= 0) {
      Alert.alert('Validation Error', 'Number of days must be greater than 0');
      return;
    }

    // payload
    const leavePayload = {
      is_added_by: userStored?.id,
      employee_name: userStored?.name,
      employee_number: userStored?.employee_id,
      designation_id: userStored?.designation_id,
      location: 'Karachi',
      leave_type: leaveType,
      start_date: startDate,
      end_date: endDate,
      days,
      reason,
      leave_file: attachment,
      FYID: 1,
    };

    const formData = new FormData();

    // Append non-file fields
    Object.entries(leavePayload).forEach(([key, value]) => {
      if (value !== undefined && value !== null && key !== 'leave_file') {
        formData.append(key, String(value));
      }
    });

    // Append file if present
    if (leavePayload.leave_file) {
      formData.append('leave_file', {
        uri: leavePayload.leave_file.uri,
        type: leavePayload.leave_file.type,
        name: leavePayload.leave_file.name,
      } as any);
    }

    // Apply Leave API
    addLeaveRequest(formData)
      ?.unwrap()
      ?.then(res => {
        console.log('Leave Applied Successfully:', res);
        AppToast({ type: 'success', message: res?.message });
        goBack();
      })
      .catch(err => {
        console.log('Leave Apply Error:', err);
        AppToast({ type: 'error', message: err?.data?.message });
      });
  };

  // Drop Down handler
  const handleDropDownValue = (selectedValue: DropdownItem, key: string) => {
    // to remove the error
    setInputsError(prev => ({
      ...prev,
      leaveType: '',
    }));
    // to set the value in the inputs
    handleInputs('leaveType', selectedValue?.id);
    handleInputs('leaveBalance', selectedValue?.value);
    setDropDownValues(prev => ({
      ...prev,
      [key]: selectedValue,
    }));
  };

  // Date Picker Functions
  const openDatePicker = (_key: string) => {
    setShowDatePicker({
      key: _key,
      show: true,
    });
  };

  const onDateChange = (event: any, selectedDate?: Date) => {
    if (!selectedDate) return;

    const isoDate = selectedDate.toISOString().split('T')[0];
    const key = showDatePicker?.key as 'startDate' | 'endDate';

    // save the selected date
    handleInputs(key, isoDate);

    // mix old + new values
    const startDate = key === 'startDate' ? isoDate : inputValues.startDate;
    const endDate = key === 'endDate' ? isoDate : inputValues.endDate;

    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);

      if (end < start) {
        // invalid range
        Alert.alert(
          'Invalid Date Range',
          'End date cannot be earlier than start date.',
        );
        handleInputs('days', '0');
      } else {
        // ✅ valid range
        const diffTime = end.getTime() - start.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
        handleInputs('days', String(diffDays));
      }
    }

    setShowDatePicker({ key: '', show: false });
  };

  ///

  //function to handle the signin input changes

  const handleInputs = (field: string, textValue: any) => {
    setInputValues(prev => ({
      ...prev,
      [field]: textValue,
    }));
    handleErrors('', field);
  };

  //function to handle signin errors in inputs
  const handleErrors = (errorMessage: string, input: string) => {
    setInputsError(prevState => ({
      ...prevState,
      [input]: errorMessage,
    }));
  };
  // SignIn Inputs Structure
  const inputs = [
    {
      id: 'leaveBalance',
      title: 'Leave Balance:',
      placeholder: 'Select leave type to check leave balance',
      value: inputValues?.leaveBalance,
      editable: false,
      errorMessage: inputsError?.leaveBalance,
      autoCapitalize: 'none',
    },
    {
      key: 'date',
      id: 'startDate',
      title: 'Start Date:',
      placeholder: 'Start Date',
      value: inputValues.startDate,
      editable: false,
      errorMessage: inputsError?.startDate,
      rightIcon: Images.calendar,
    },
    {
      key: 'date',
      id: 'endDate',
      title: 'End Date:',
      placeholder: 'End Date',
      value: inputValues.endDate,
      editable: false,
      errorMessage: inputsError?.endDate,
      rightIcon: Images.calendar,
    },
    {
      id: 'days',
      title: 'Days',
      placeholder: 'Days',
      editable: false,
      value: inputValues.days,
      errorMessage: inputsError?.days,
    },
  ];

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
      <KeyboardAvoidingView
        style={styles.screenContent}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <CustomDropdown
            // dropdownContainerStyle={styles.dropDownContainer}
            dropdownStyle={styles.dropDownStyle}
            title={Labels.leaveType}
            data={leaveTypesDropDownData}
            selectedValue={dropDownValues?.leaveType?.label || ''}
            onSelect={value => handleDropDownValue(value, 'leaveType')}
          />
          {/* ERROR SHOWING FOR DROPDOWN */}
          {inputsError?.leaveType && (
            <Text style={styles.errorText}>{inputsError?.leaveType}</Text>
          )}

          {inputs.map(input => (
            <Pressable
              onPress={() => {
                // this is only for inputs that (to open Datepicker)
                input?.key === 'date' ? openDatePicker(input?.id) : null;
              }}
            >
              <CustomTextInput
                onRightIconPress={() => {
                  // this is only for inputs that (to open Datepicker)
                  input?.key === 'date' ? openDatePicker(input?.id) : null;
                }}
                title={input.title}
                key={input.id}
                id={input?.id}
                inputContainerStyle={styles.inputContainer}
                placeholder={input?.placeholder}
                rightIcon={input?.rightIcon}
                editable={input?.editable}
                // pointerEvents={input?.key === 'date' ? 'none' : 'auto'}
                onChangeText={text => handleInputs(input?.id, text)}
                value={input?.value}
                errorMessage={input?.errorMessage}
              />
            </Pressable>
          ))}
          <RadioButton
            title={Labels.dayType}
            options={[
              { label: 'Full Day', value: 'full' },
              { label: 'Half Day', value: 'half' },
            ]}
            selectedValue={inputValues?.dayType}
            onSelect={value => handleInputs('dayType', value)}
            direction="row"
          />
          <CustomTextInput
            title={Labels.reason}
            placeholder={Labels.reason}
            inputContainerStyle={styles.reasonInputContainer}
            inputStyle={styles.reasonInput}
            multiline={true}
            value={inputValues?.reason}
            onChangeText={text => handleInputs('reason', text)}
          />
          <AttachFile
            maxSizeMB={20}
            onFileSelect={file => handleInputs('attachment', file)}
          />
          {/*  Date Picker  */}
          {showDatePicker?.show && (
            <DateTimePicker
              value={new Date(new Date())}
              mode="date"
              display={Platform.OS === 'ios' ? 'inline' : 'default'}
              onChange={onDateChange}
            />
          )}
          <Button
            title="Apply"
            onPress={handleApplyLeave}
            loading={isLoading}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default LeaveManagementForm;
