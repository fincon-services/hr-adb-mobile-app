import React, { useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { useDispatch } from 'react-redux';
import Button from '../../components/button/Button';
import CustomTextInput from '../../components/customTextInput/CustomTextInput';
import { Images } from '../../constants/images';
import { Labels } from '../../constants/labels';
import { goBack, navigate } from '../../navigation/navigationServices';
import { Utility } from '../../utils/Utility';
import Header from '../../components/header/Header';
import { ForgotInputsValues } from '../../types/models/inputsTypes';
import { styles } from './forgotPassword.style';
import globalstyles from '../../constants/globalstyles';

const ForgotPassword = () => {
  //Const
  const dispatch = useDispatch();
  //API initializing

  //States
  const [inputValues, setInputValues] = useState<ForgotInputsValues>({
    email: '',
  });
  const [inputsError, setInputsError] = useState<ForgotInputsValues>({
    email: '',
  });
  //Functions

  // handle User SignIn
  const handleForgotPassword = () => {
    let forgotPasswordValues = {
      email: inputValues?.email,
    };
    const validation = Utility.forgotValidation(
      forgotPasswordValues,
      handleErrors,
    );
    validation &&
      navigate('OTPVerification', {
        email: inputValues?.email,
        isForgotPassword: true,
      });
  };

  // function to handle the signin input changes
  const handleInputs = (field: string, textValue: string) => {
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
      id: 'email',
      title: 'Email',
      placeholder: 'Enter your email',
      value: inputValues.email,
      errorMessage: inputsError?.email,
      keyboardType: 'email-address',
      autoCapitalize: 'none',
    },
  ];

  //Main Return
  return (
    <KeyboardAvoidingView
      style={globalstyles.flex(1)}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <Header leftIcon={Images.goBack} onLeftPress={() => goBack()} />
        <View style={styles.topLogoContainer}>
          <Image
            source={Images.appLogo}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.forgotText}>{Labels.forgotPassword}</Text>
          <Text style={styles.title}>{Labels.forgotPasswordNote}</Text>
        </View>

        {/* Forgot Password  */}
        <View style={styles.forgotContainer}>
          {inputs.map(input => (
            <CustomTextInput
              key={input.id}
              id={input?.id}
              title={input?.title}
              placeholder={input?.placeholder}
              onChangeText={text => handleInputs(input?.id, text)}
              value={input?.value}
              errorMessage={input?.errorMessage}
            />
          ))}
          <Button
            title={Labels.sendCode}
            onPress={() => handleForgotPassword()}
            buttonStyle={styles.buttonStyle}
          />
          <Text style={styles.codeWillNoteText}>{Labels.codeWillExpire}</Text>
          <Text style={styles.codeNotSendNoteText}>{Labels.codeErrorNote}</Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ForgotPassword;
