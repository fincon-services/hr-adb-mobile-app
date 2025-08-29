import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import Button from '../../components/button/Button';
import CustomTextInput from '../../components/customTextInput/CustomTextInput';
import Header from '../../components/header/Header';
import { Images } from '../../constants/images';
import { Labels } from '../../constants/labels';
import { goBack, navigate } from '../../navigation/navigationServices';
import { useChangeUserPasswordMutation } from '../../services/appApi/AppApi';
import styles from './changePassword.style';

const ChangePassword = () => {
  //API initialization
  const [changePasswordAPI, { isLoading }] = useChangeUserPasswordMutation();
  //States
  const [inputValues, setInputValues] = useState({
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });
  const [inputsError, setInputsError] = useState({
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });
  // edit profile  Inputs Structure
  const passwordInputs = [
    {
      id: 'currentPassword',
      title: Labels.currentPassword,
      placeholder: Labels.placeholderCurrentPassword,
      value: inputValues.currentPassword,
      errorMessage: inputsError?.currentPassword,
      keyboardType: 'default',
      autoCapitalize: 'none',
      secureTextEntry: true,
      rightIcon: Images.hidePasswordIcon,
    },
    {
      id: 'newPassword',
      title: Labels.newPassword,
      placeholder: Labels.placeholderNewPassword,
      value: inputValues.newPassword,
      errorMessage: inputsError?.newPassword,
      secureTextEntry: true,
      rightIcon: Images.hidePasswordIcon,
    },
    {
      id: 'confirmNewPassword',
      title: Labels.confirmNewPassword,
      placeholder: Labels.placeholderConfirmNewPassword,
      value: inputValues.confirmNewPassword,
      errorMessage: inputsError?.confirmNewPassword,
      secureTextEntry: true,
      rightIcon: Images.hidePasswordIcon,
    },
  ];

  // Functions

  // function to handle the password input changes
  const handleInputs = (field: string, textValue: string) => {
    setInputValues(prev => ({
      ...prev,
      [field]: textValue,
    }));
    handleErrors('', field);
  };

  //function to handle password errors in inputs
  const handleErrors = (errorMessage: string, input: string) => {
    setInputsError(prevState => ({
      ...prevState,
      [input]: errorMessage,
    }));
  };
  //
  const handleChangePassword = () => {
    const payloadData = {
      old_password: inputValues?.currentPassword,
      new_password: inputValues?.newPassword,
      confirm_password: inputValues?.confirmNewPassword,
    };

    // Change password API call

    // changePasswordAPI(payloadData)
    //   .then(response => {
    //     console.log(response, 'CHANGEPASSWORD:RES');
    //     goBack();
    //   })
    //   .catch(error => {
    //     console.log(error, 'CHANGEPASSWORD:ERROR');
    //   });
  };
  //Main Return
  return (
    <View style={styles.container}>
      <Header
        leftIcon={Images.goBack}
        rightIcon={Images.activeBellIcon}
        title={Labels.changePassword}
        onLeftPress={() => goBack()}
        onRightPress={() => navigate('Notifications')}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView>
          {passwordInputs.map(input => (
            <CustomTextInput
              key={input.id}
              id={input?.id}
              title={input?.title}
              inputStyle={styles.inputStyle}
              inputContainerStyle={styles.inputContainer}
              placeholder={input?.placeholder}
              onChangeText={text => handleInputs(input?.id, text)}
              value={input?.value}
              errorMessage={input?.errorMessage}
              secureTextEntry={input?.secureTextEntry}
              rightIcon={input?.rightIcon}
            />
          ))}
          <Button
            title={Labels.save}
            loading={isLoading}
            onPress={handleChangePassword}
            buttonStyle={styles.buttonStyle}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default ChangePassword;
