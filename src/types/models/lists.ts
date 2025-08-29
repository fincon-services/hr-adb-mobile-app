import { User } from './user';

// export interface CreatedBy {
//   id: number;
//   name: string;
// }

export interface PolicyType {
  id: number;
  name: string;
  type_id: string;
  status: string;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface PolicyItem {
  id: number;
  policy_type_id: string;
  description: string;
  attachment: string;
  created_by: User;
  updated_by: User;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
  approval_status?: string;
  policy_type?: PolicyType;
}
export interface ApprovalStatus {
  id: number;
  approval_process_id: string;
  designation_id: string;
  approval_status: string;
  process_order: string;
  created_by: string;
  updated_by: User;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
  request_module_id: string;
  comments: string | null;
  approval_request_status: string;
  designation: Designation;
}
export interface Designation {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
  report_to: string | null;
  created_by: string;
  updated_by: string;
  deleted_at: string | null;
}

export interface PolicyDetail {
  policy: PolicyItem;
  approval_request: unknown | null; // adjust later if structure is known
  approval_request_status: ApprovalStatus[];
}

// Leave Types

////
export interface LeaveType {
  id: number;
  name: string;
  type_id: string;
  status: string;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
}
export interface LeaveItem {
  id?: number;
  employee_name?: string;
  employee_number?: string;
  designation_id?: string;
  leave_type: LeaveType;
  location: string | null;
  start_date: string;
  end_date: string;
  days: string; // could be number if API guarantees numeric
  reason: string;
  created_by: string;
  updated_by: string | null;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
  approval_status: string;
  leave_paid_status: string;
  leave_status: string | null;
  leave_file: string | null;
  emp_leave_balance: string;
  FYID: string;
  is_added_by: string;
  emp_detail?: {
    id: number;
    name: string;
    employee_no: string;
    department_id: string;
    designation_id: string;
    department: {
      id: number;
      name: string;
    };
    designation: {
      id: number;
      name: string;
    };
  };
}
export interface LeaveBalanceItem {
  leave_type_id: string;
  leave_type: string;
  leave_balance: string;
  availed_balance: string;
  entitlement_balance: string;
  pending_leave_requests: string | null;
}
export interface LeaveBalance {
  employee_name?: string;
  leave_balances: LeaveBalanceItem[];
}
export interface LeavesData {
  leave_balance: LeaveBalance[];
  leave_types: LeaveType[];
}
