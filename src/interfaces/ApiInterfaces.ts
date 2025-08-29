import {
  LeaveBalance,
  LeaveItem,
  LeavesData,
  PolicyDetail,
  PolicyItem,
} from '../types/models/lists';
import { Employee, User } from '../types/models/user';

export interface ApiResponse<T> {
  type: string; // e.g. "success"
  status: number; // e.g. 1
  message: string;
  data: T;
}
export type LoginRequestBody = {
  email: string;
  password: string;
};

export interface LoginResponse {
  data: {
    access_token: string;
    user: User;
  };
}

export interface UserProfileResponse {
  // success: boolean;
  // statusCode: number;
  // message: string;
  // data: User;
  data: Employee | undefined;
}
export interface UserProfileRequest {
  employee_id: string | number | undefined;
}
export interface UpdateUserProfileTypes {
  name: string;
  email: string;
  phone: string;
  cnic: string;
  dob: string;
  gender_id?: string;
  blood_group_id?: string;
  education_id?: string;
  profile_image?: FormData;
}

export interface ChangePasswordRequestBody {
  old_password: string;
  new_password: string;
  confirm_password: string;
}
export interface ChangePasswordResponse {
  old_password: string;
  new_password: string;
  confirm_password: string;
}

export interface PolicyResponse {
  data: PolicyItem[];
  message?: string;
  status?: string | number;
}
export interface PolicyDetailResponse {
  data: PolicyDetail;
  message?: string;
  status?: string | number;
}

export interface LeaveResponse {
  data: {
    leaveList: LeaveItem[];
    employee_detail: User;
    leave_date: LeavesData;
  };
  message?: string;
  status?: string | number;
}
export interface LeaveDetailResponse {
  data: {
    leave: LeaveItem;
    leave_balance?: LeaveBalance[];
  };
  message?: string;
  status?: string | number;
}
