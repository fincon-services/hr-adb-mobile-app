import Attendance from '../../screens/attendance/Attendance';
import ChangePassword from '../../screens/changePassword/ChangePassword';
import Home from '../../screens/home/Home';
import LeaveDetails from '../../screens/leaveDetails/LeaveDetails';
import LeaveManagementForm from '../../screens/leaveManagementForm/LeaveManagementForm';
import LeaveManagement from '../../screens/leaveManagment/LeaveManagement';
import Notifications from '../../screens/notifications/Notifications';
import Policy from '../../screens/policy/Policy';
import PolicyDetail from '../../screens/policyDetail/PolicyDetail';
import Profile from '../../screens/profile/Profile';
import SalarySlip from '../../screens/salarySlip/SalarySlip';

export const appRoutes = [
  {
    name: 'Home',
    component: Home,
  },
  {
    name: 'Profile',
    component: Profile,
  },

  {
    name: 'ChangePassword',
    component: ChangePassword,
  },

  {
    name: 'Notifications',
    component: Notifications,
  },
  {
    name: 'Attendance',
    component: Attendance,
  },
  {
    name: 'Policy',
    component: Policy,
  },
  {
    name: 'PolicyDetail',
    component: PolicyDetail,
  },
  {
    name: 'LeaveManagement',
    component: LeaveManagement,
  },
  {
    name: 'LeaveManagementForm',
    component: LeaveManagementForm,
  },
  {
    name: 'LeaveDetails',
    component: LeaveDetails,
  },
  {
    name: 'SalarySlip',
    component: SalarySlip,
  },
];
