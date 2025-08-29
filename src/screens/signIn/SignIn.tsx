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
import AppToast from '../../components/appToast/AppToast';
import Button from '../../components/button/Button';
import CustomTextInput from '../../components/customTextInput/CustomTextInput';
import { Images } from '../../constants/images';
import { Labels } from '../../constants/labels';
import { navigate } from '../../navigation/navigationServices';
import { useLoginMutation } from '../../services/authApi/AuthApi';
import { setToken, setUser } from '../../store/slices/AuthSlice';
import { SignInFormValues } from '../../types/models/inputsTypes';
import { Utility } from '../../utils/Utility';
import { styles } from './signIn.style';

const SignIn = () => {
  //Const
  const dispatch = useDispatch();
  //API initializing
  const [loginAPI, { isLoading }] = useLoginMutation();
  //States
  const [inputValues, setInputValues] = useState<SignInFormValues>({
    email: '',
    password: '',
  });
  const [inputsError, setInputsError] = useState<SignInFormValues>({
    email: '',
    password: '',
  });
  //Functions

  // handle User SignIn
  const handleSignIn = () => {
    let signInValues = {
      email: inputValues?.email,
      password: inputValues?.password,
    };

    const validation = Utility.signInValidation(signInValues, handleErrors);

    // validation && dispatch(setUser(data?.user));
    // validation && dispatch(setToken('testingToken123'));
    //API LOGIN

    validation &&
      loginAPI(signInValues)
        .unwrap()
        .then(response => {
          const data = response?.data;
          console.log(data, 'LoginResponse:');
          dispatch(setUser(data?.user));
          console.log(data?.user, 'USERDATA:LOGINRESPONSE');
          dispatch(setToken(data?.access_token));
        })
        .catch(error => {
          console.log(error, 'skdjfksdjfksdjf');
          AppToast({ type: 'error', message: error?.data?.message });
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
      // title: 'Email',
      placeholder: 'Username',
      value: inputValues.email,
      errorMessage: inputsError?.email,
      keyboardType: 'email-address',
      autoCapitalize: 'none',
    },
    {
      id: 'password',
      // title: 'Password',
      placeholder: 'Password',
      value: inputValues.password,
      errorMessage: inputsError?.password,
      secureTextEntry: true,
      rightIcon: Images.hidePasswordIcon,
    },
  ];

  //Main Return
  return (
    <KeyboardAvoidingView
      style={styles.topContainer}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <Image
          source={Images.appLogo}
          style={styles.logo}
          resizeMode="contain"
        />
        {/* SignIn  */}
        <View style={styles.signInContainer}>
          <Text style={styles.signInText}>{Labels.signInToYourAccount}</Text>
          {inputs.map(input => (
            <CustomTextInput
              key={input.id}
              id={input?.id}
              placeholder={input?.placeholder}
              secureTextEntry={input?.secureTextEntry}
              rightIcon={input?.rightIcon}
              onChangeText={text => handleInputs(input?.id, text)}
              value={input?.value}
              errorMessage={input?.errorMessage}
            />
          ))}
          <Text
            style={styles.forgotPasswordText}
            onPress={() => navigate('ForgotPassword')}
          >
            {Labels.forgotYourPassword}
          </Text>
          <Button
            title={Labels.signIn}
            loading={isLoading}
            onPress={() => handleSignIn()}
            buttonStyle={styles.buttonStyle}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
