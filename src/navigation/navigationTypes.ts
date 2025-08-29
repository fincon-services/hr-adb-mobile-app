import {
  LeaveBalance,
  LeaveBalanceItem,
  LeaveType,
} from '../types/models/lists';

export type AuthStackParamList = {
  SignIn: undefined;
  ForgotPassword: undefined;
  OTPVerification: { email: string; isForgotPassword: boolean };
};

export type AppStackParamList = {
  // for testing now these types params are added
  Home: undefined;
  Settings: undefined;
  Dashboard: undefined;
  Profile: undefined;
  EditProfile: undefined;
  ChangePassword: undefined;
  Notifications: undefined;
  Policy: undefined;
  PolicyDetail: { policyId: string | number };
  SalarySlip: undefined;
  PendingApprovals: undefined;
  Complaints: undefined;
  LeaveManagement: undefined;
  Attendance: undefined;
  Empty: undefined;
  LeaveManagementForm: {
    leaveTypeLists: LeaveType[];
    leave_balance: LeaveBalanceItem[];
  };
  LeaveDetails: {
    leaveId: string | number | undefined;
  };
};
