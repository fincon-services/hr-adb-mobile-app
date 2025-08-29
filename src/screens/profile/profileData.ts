import { Labels } from '../../constants/labels';
import { Employee } from '../../types/models/user';

export const populateDemographicsData = (user: Employee | undefined) => ({
  title: Labels.DemographicDetails.title,
  data: [
    { title: Labels.DemographicDetails.so, value: '-' },
    {
      title: Labels.DemographicDetails.dateOfBirth,
      value: user?.date_of_birth,
    },
    {
      title: Labels.DemographicDetails.gender,
      value: user?.gender?.name,
    },
    {
      title: Labels.DemographicDetails.maritalStatus,
      value: user?.marital?.name,
    },
    {
      title: Labels.DemographicDetails.religion,
      value: user?.religion?.name,
    },
    {
      title: Labels.DemographicDetails.phoneNo,
      value: user?.phone_no,
    },
    {
      title: Labels.DemographicDetails.emergencyNo,
      value: user?.emergency_no,
    },
    { title: Labels.DemographicDetails.cnic, value: user?.cnic },
    {
      title: Labels.DemographicDetails.cnicIssuance,
      value: user?.cnic_issuance,
    },
    {
      title: Labels.DemographicDetails.cnicExpiry,
      value: user?.cnic_expiry,
    },
    {
      title: Labels.DemographicDetails.personalEmail,
      value: user?.personal_email,
    },
    {
      title: Labels.DemographicDetails.officialEmail,
      value: user?.offical_email,
    },
    {
      title: Labels.DemographicDetails.bloodGroup,
      value: user?.blood_group_name?.name,
    },
    {
      title: Labels.DemographicDetails.exemptedFromAttendance,
      value: user?.attendance_exemption,
    },
    {
      title: Labels.DemographicDetails.timeSheetRequired,
      value: user?.timesheet_status,
    },
    {
      title: Labels.DemographicDetails.district,
      value: user?.district?.name,
    },
    {
      title: Labels.DemographicDetails.residentialAddress,
      value: user?.residential_address,
    },
    {
      title: Labels.DemographicDetails.permanentAddress,
      value: user?.permanent_address,
    },
  ],
});
export const populateUserJobDetail = (user: Employee | undefined) => ({
  title: Labels.JobDetails.title,
  data: [
    {
      title: Labels.JobDetails.headOffice,
      value: user?.head_office?.name,
    },
    {
      title: Labels.JobDetails.branchOffice,
      value: user?.branch_office?.name,
    },
    {
      title: Labels.JobDetails.designation,
      value: user?.designation?.name,
    },
    {
      title: Labels.JobDetails.reportTo,
      value: user?.report_to?.name,
    },
    {
      title: Labels.JobDetails.department,
      value: user?.department?.name,
    },
    {
      title: Labels.JobDetails.employeeType,
      value: user?.employee_type,
    },
    { title: Labels.JobDetails.shift, value: user?.shift?.name },
    {
      title: Labels.JobDetails.referenceType,
      value: user?.reference_name?.name,
    },
    { title: Labels.JobDetails.grade, value: user?.grade?.grading },
  ],
});
