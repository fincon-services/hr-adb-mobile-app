import { ImageSourcePropType } from 'react-native';
export type RelatedEntity = {
  id: number;
  name: string;
  typeId?: string;
  status?: string;
  deletedAt?: null;
  createdAt?: string;
  updatedAt?: string;
};
export type User = {
  id?: number;
  vendor_id?: number | null;
  employee_id?: string | number | null;
  name?: string | null;
  email?: string;
  avatar?: ImageSourcePropType | any;
  address?: string;
  phone?: string;
  educationStatus?: string;
  shift?: string | number;
  cnic?: string | null;
  dob?: string | null;
  /////
  bio?: null;
  bloodGroupId?: null;
  created_at?: string;
  createdBy?: null;
  deletedAt?: null;
  departmentId?: null;
  designation_id?: null;
  educationId?: null;
  education?: RelatedEntity;
  bloodGroup?: RelatedEntity;
  email_verified_at?: null;
  genderId?: null;
  gender?: RelatedEntity;
  profileImage?: ImageSourcePropType | any;
  status?: 1;
  user_type?: string;
  updated_at?: string;
  updatedBy?: string | null;
  signature?: ImageSourcePropType | any;
};

export interface Employee {
  id: number;
  name: string | null | undefined;
  employee_no: string;
  head_office_id: string;
  branch_office_id: string;
  shift_id: string;
  date_of_birth: string; // ISO date
  marital_id: string;
  district_id: string;
  employee_type: string;
  leave_date: string | null;
  cnic: string;
  phone_no: string;
  cnic_issuance: string; // ISO date
  cnic_expiry: string; // ISO date
  personal_email: string;
  offical_email: string;
  department_id: string;
  report_to_id: string;
  blood_group: string;
  date_of_joining: string; // ISO date
  designation_id: string;
  parentage_id: string;
  parentage_name: string;
  religion_id: string;
  emergency_no: string;
  gender_id: string;
  reference_id: string;
  reference: string;
  residential_address: string;
  permanent_address: string;
  emp_profile: string; // file path
  created_by: string;
  updated_by: string | null;
  deleted_at: string | null;
  created_at: string; // timestamp
  updated_at: string; // timestamp
  payscale: string;
  IsBoardMember: string; // "0" | "1"
  cnic_lifetime: string; // "0" | "1"
  project_id?: string | null;
  grade?: Grade | null;
  payscale_level?: string | null;
  exit_employee_detail_id: string | null;
  Attendance_Id: string;
  salutation?: string | null;
  attendance_exemption: string; // "0" | "1"
  timesheet_status: string; // "0" | "1"
  employee_card: string | null;
  card_status: string; // "0" | "1"
  religious_sect: string | null;
  shift: RelatedEntity;
  // Nested Objects (placeholders for now)
  ProjectDetail?: ProjectDetail;
  complain_againsts?: ComplainAgainst[];
  complain_from_employees?: ComplainFromEmployee[];
  district?: RelatedEntity;
  user_profile?: User;
  head_office?: RelatedEntity;
  branch_office?: RelatedEntity;
  designation?: RelatedEntity;
  marital?: RelatedEntity;
  employee_typ?: EmployeeType;
  department?: RelatedEntity;
  blood_group_name?: RelatedEntity;
  parentage?: RelatedEntity;
  religion?: RelatedEntity;
  gender?: RelatedEntity;
  reference_name?: RelatedEntity;
  user?: User;
  report?: Report | null;
  qualification?: Qualification[];
  experience?: Experience[];
  report_to?: Employee;
  employee_chnage_status?: EmployeeChangeStatus[];
  employee_documents?: EmployeeDocument[];
  emp_contract?: EmpContract;
  emp_contracts?: EmpContract[];
  employee_timesheet?: EmployeeTimeSheet[];
  generated_letter?: GeneratedLetter[];
}

// Placeholder nested object types
export interface ProjectDetail {}
export interface ComplainAgainst {}
export interface ComplainFromEmployee {}
export interface District {}
export interface UserProfile {}
export interface Shift {}
export interface HeadOffice {}
export interface BranchOffice {}
export interface Designation {}
export interface Marital {}
export interface EmployeeType {}
export interface Department {}
export interface BloodGroup {}
export interface Parentage {}
export interface Religion {}
export interface ReferenceName {}
export interface Report {}
export interface Qualification {}
export interface Experience {}
export interface ReportTo {}
export interface EmployeeChangeStatus {}
export interface EmployeeDocument {}
export interface EmpContract {}
export interface EmployeeTimeSheet {}
export interface GeneratedLetter {}
export interface Grade {
  id: string;
  grading: string;
  amount: string;
  created_by: string;
  updated_by: string;
  deleted_at: string;
  created_at: string;
  updated_at: string;
}
