import { Labels } from '../../constants/labels';
import { LeaveItem } from '../../types/models/lists';

export const populateLeaveDetails = (leave: LeaveItem | undefined) => ({
  title: Labels.leaveDetails.title,
  data: [
    { title: Labels.leaveDetails.employeeName, value: leave?.employee_name },
    {
      title: Labels.leaveDetails.department,
      value: leave?.designation_id,
    },
    {
      title: Labels.leaveDetails.leaveType,
      value: leave?.leave_type?.name,
    },
    {
      title: Labels.leaveDetails.startDate,
      value: leave?.start_date,
    },
    {
      title: Labels.leaveDetails.endDate,
      value: leave?.end_date,
    },
    {
      title: Labels.leaveDetails.days,
      value: leave?.days,
    },
    {
      title: Labels.leaveDetails.leavePaidStatus,
      value: leave?.leave_paid_status || '-',
    },
    {
      title: Labels.leaveDetails.reason,
      value: leave?.reason,
    },
  ],
});
