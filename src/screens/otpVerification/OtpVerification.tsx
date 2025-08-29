import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import {
  Animated,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextStyle,
} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Button from '../../components/button/Button';
import Header from '../../components/header/Header';
import { Colors } from '../../constants/colors';
import { Images } from '../../constants/images';
import { Labels } from '../../constants/labels';
import { goBack, navigate } from '../../navigation/navigationServices';
import { AuthStackParamList } from '../../navigation/navigationTypes';
import { verticalScale } from '../../utils/responsive';
import styles from './otpVerification.style';

const { Value, Text: AnimatedText } = Animated;
const CELL_COUNT = 4;

const animationsColor = Array.from({ length: CELL_COUNT }, () => new Value(0));
const animationsScale = Array.from({ length: CELL_COUNT }, () => new Value(1));

const animateCell = ({
  hasValue,
  index,
  isFocused,
}: {
  hasValue: boolean;
  index: number;
  isFocused: boolean;
}) => {
  Animated.parallel([
    Animated.timing(animationsColor[index], {
      useNativeDriver: false,
      toValue: isFocused ? 1 : 0,
      duration: 250,
    }),
    Animated.spring(animationsScale[index], {
      useNativeDriver: false,
      toValue: hasValue ? 0 : 1,
    }),
  ]).start();
};

type OTPScreenProps = StackScreenProps<AuthStackParamList, 'OTPVerification'>;

const OTPVerification: React.FC<OTPScreenProps> = ({ navigation, route }) => {
  const { email, isForgotPassword } = route?.params || {};

  const { top } = useSafeAreaInsets();

  const [OTPCode, setOTPCode] = useState<string>('');
  const [codeError, setCodeError] = useState<boolean>(false);

  const ref = useBlurOnFulfill({ value: OTPCode, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value: OTPCode,
    setValue: setOTPCode,
  });

  const handleVerifyEmail = (_otpCode: string) => () => {
    Keyboard.dismiss();
    if (_otpCode) {
      const payload = {
        email: email,
        otp: _otpCode,
      };
      verifyOTP(payload);
    } else {
      setCodeError(true);
    }
  };

  const verifyOTP = async (payload: { email: string; otp: string }) => {
    try {
      //   const response = await verifyOTPAPI(payload).unwrap();
      setCodeError(false);
      if (isForgotPassword) {
        navigate('SignIn');
      }
    } catch (errorResponse: any) {
      setCodeError(true);
      const { error } = errorResponse?.data || {};
    }
  };

  const handleOnChangeCode = (code: string) => {
    setOTPCode(code);
    setCodeError(false);
  };

  const renderCell = ({
    index,
    symbol,
    isFocused,
  }: {
    index: number;
    symbol: string;
    isFocused: boolean;
  }) => {
    const cellBorderColor = codeError ? Colors.red : Colors.themeColor;
    const hasValue = Boolean(symbol);

    const animatedCellStyle: Animated.WithAnimatedObject<TextStyle> = {
      borderColor: hasValue
        ? animationsScale[index].interpolate({
            inputRange: [0, 0],
            outputRange: [cellBorderColor, cellBorderColor],
          })
        : animationsColor[index].interpolate({
            inputRange: [1, 1],
            outputRange: [cellBorderColor, cellBorderColor],
          }),
      transform: [
        {
          scale: animationsScale[index].interpolate({
            inputRange: [0, 1],
            outputRange: [0.8, 1],
          }),
        },
      ],
    };

    setTimeout(() => {
      animateCell({ hasValue, index, isFocused });
    }, 0);

    return (
      <AnimatedText
        key={index}
        style={[styles.cell, animatedCellStyle]}
        onLayout={getCellOnLayoutHandler(index)}
      >
        {symbol || (isFocused ? <Cursor /> : null)}
      </AnimatedText>
    );
  };

  // Main Return
  return (
    <KeyboardAvoidingView
      style={styles.mainContainer}
      behavior={Platform.OS === 'ios' ? 'height' : 'padding'}
    >
      <Header
        leftIcon={Images.goBack}
        title={Labels.changePassword}
        onLeftPress={() => goBack()}
      />
      <Text style={styles.title}>{Labels.otpVerification}</Text>
      <Text style={styles.receiveCodeText}>{Labels.otpNote}</Text>
      <CodeField
        ref={ref}
        {...props}
        value={OTPCode}
        onChangeText={handleOnChangeCode}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={renderCell}
      />

      {codeError && (
        <Text style={styles.inCorrectCodeText}>{Labels.otpErrorNote}</Text>
      )}

      <Text style={styles.receiveCodeText}>{Labels.didntReceiveEmail}</Text>
      <Text style={styles.receiveCodeText}>{Labels.resendCodeNote}</Text>
      <Button
        title={'Verify Code'}
        onPress={handleVerifyEmail(OTPCode)}
        buttonStyle={{ marginTop: verticalScale(50) }}
      />
    </KeyboardAvoidingView>
  );
};

export default OTPVerification;
