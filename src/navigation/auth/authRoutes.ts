import ForgotPassword from '../../screens/forgotPassword/ForgotPassword';
import OTPVerification from '../../screens/otpVerification/OtpVerification';
import SignIn from '../../screens/signIn/SignIn';

export const authRoutes = [
  {
    name: 'SignIn',
    component: SignIn,
  },
  {
    name: 'ForgotPassword',
    component: ForgotPassword,
  },
  {
    name: 'OTPVerification',
    component: OTPVerification,
  },
];
