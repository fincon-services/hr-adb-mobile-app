// utils/AppToast.ts
import { Alert, Platform, ToastAndroid } from 'react-native';

type ToastType = 'success' | 'error' | 'info';

interface AppToastProps {
  message: string;
  type?: ToastType; // optional: "success" | "error" | "info"
  duration?: 'short' | 'long'; // optional
}

const AppToast = ({
  message,
  type = 'info',
  duration = 'short',
}: AppToastProps) => {
  // Choose duration for Android
  const toastDuration =
    duration === 'short' ? ToastAndroid.SHORT : ToastAndroid.LONG;

  // Custom prefix/icon for types
  let finalMessage = message;
  if (type === 'success') finalMessage = '✅ ' + message;
  if (type === 'error') finalMessage = '❌ ' + message;
  if (type === 'info') finalMessage = 'ℹ️ ' + message;

  if (Platform.OS === 'android') {
    ToastAndroid.show(finalMessage, toastDuration);
  } else {
    Alert.alert(type.toUpperCase(), message);
  }
};

export default AppToast;
