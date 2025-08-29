import { Colors } from '../constants/colors';
import { Labels } from '../constants/labels';
import {
  ForgotInputsValues,
  HandleForgotInputsErrors,
  HandleSignInErrors,
  SignInFormValues,
} from '../types/models/inputsTypes';
// types.ts
export interface LeaveStatus {
  id: string;
  name: string;
  color: string;
}
export const Utility = {
  // Function to convert a date string to a more readable format
  formatDate: (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      weekday: 'long',
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  },
  getMonthYear: (dateString: Date) => {
    const year = dateString.getFullYear();
    const month = dateString.toLocaleString('en-US', { month: 'short' }); // Jan, Feb, Mar...
    const formattedDate = `${month}-${year}`;

    return formattedDate;
  },
  formatDateToDash: (date: Date | string): string => {
    const d = typeof date === 'string' ? new Date(date) : date;

    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0'); // MM
    const day = String(d.getDate()).padStart(2, '0'); // DD

    return `${year}-${month}-${day}`;
  },

  // Function to convert a date string to a more readable format
  formatDateToNum: (dateString: string | Date): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  },
  // Multi select Items
  multiSelectItems: (items: any[], selectedItems: any[]): any[] => {
    return items.map(item => ({
      ...item,
      isSelected: selectedItems.includes(item.id),
    }));
  },
  // single select Item
  singleSelectItem: (items: any[], selectedItemId: string): any[] => {
    return items.map(item => ({
      ...item,
      isSelected: item.id === selectedItemId,
    }));
  },
  // validate email regex
  validateEmail: function (email: string) {
    var re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  },
  validateFullName: function (name: string) {
    var regex = /[A-zÀ-úÀ-ÿA-Za-z][A-Za-zÀ-ÖØ-öø-ÿžźż]+$/;
    return regex.test(name);
  },
  validateName: function (name: string) {
    var regex = /[A-zÀ-úÀ-ÿA-Za-z][A-Za-zÀ-ÖØ-öø-ÿžźż]+$/;
    return regex.test(name);
  },
  // // validate password regex
  // validatePassword: function (password: string) {
  //   var re = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{7,}$/;
  //   return re.test(password);
  // },

  // validate password regex
  validatePassword: function (password: string) {
    var re = /^(?=.*?[a-z])(?=.*?[0-9]).{7,}$/;
    return re.test(password);
  },
  signInValidation: function (
    obj: Partial<SignInFormValues>,
    handleErrors: HandleSignInErrors,
  ) {
    let validation = !obj.email
      ? handleErrors(Labels.emailIsRequired, 'email')
      : !Utility.validateEmail(obj.email)
      ? handleErrors(Labels.invalidEmail, 'email')
      : !obj.password
      ? handleErrors(Labels.passwordIsRequired, 'password')
      : // : !Utility.validatePassword(obj.password)
        // ? handleErrors(Labels.invalidPassword, 'password')
        true;

    return validation;
  },
  forgotValidation: function (
    obj: Partial<ForgotInputsValues>,
    handleErrors: HandleForgotInputsErrors,
  ) {
    let validation = !obj.email
      ? handleErrors(Labels.emailIsRequired, 'email')
      : !Utility.validateEmail(obj.email)
      ? handleErrors(Labels.invalidEmail, 'email')
      : true;

    return validation;
  },
  getNameInitials: function (name: string) {
    // To get the Initials of name
    const initials = (name ?? '')
      .split(' ')
      .map(word => word[0]?.toUpperCase())
      .join('')
      .slice(0, 2);

    return initials;
  },
  getImageUrl: function (imagePath: string) {
    const assetsUrl = 'http://40.87.80.211:1602/las-backend/public/';
    return assetsUrl + imagePath;
  },
  getUrl: function (imagePath: string) {
    const assetsUrl = 'http://40.87.80.211:1602/las-backend/public/';
    return assetsUrl + imagePath;
  },

  // Maping status for the leaves
  getLeaveStatus: function (value: string): LeaveStatus {
    const leaveStatusMap: Record<string, LeaveStatus> = {
      '1': { id: '1', name: 'Approved', color: Colors.green30 },
      '2': { id: '2', name: 'Pending', color: Colors.orange10 },
      '3': { id: '3', name: 'Rejected', color: Colors.orange },
      '4': { id: '4', name: 'Draft', color: Colors.red30 },
    };
    return (
      leaveStatusMap[value] || {
        id: '0',
        name: 'Unknown',
        color: Colors.textGray10,
      }
    );
  },
};
