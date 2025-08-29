import { FileData } from '../../utils/FilePicker';

export interface SignInFormValues {
  email: string;
  password: string;
}

export type HandleSignInErrors = (
  message: string,
  field: keyof SignInFormValues,
) => void;

export interface ForgotInputsValues {
  email: string;
}

export type HandleForgotInputsErrors = (
  message: string,
  field: keyof ForgotInputsValues,
) => void;

// Apply Leave Inputs
export interface LeaveFormValues {
  leaveBalance: string;
  startDate: string;
  endDate: string;
  days: string;
  dayType: string;
  leaveType: string;
  reason: string;
  attachment: FileData;
}
export type HandleLeaveInputErrors = (
  message: string,
  field: keyof LeaveFormValues,
) => void;
