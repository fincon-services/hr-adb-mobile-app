import {
  ChangePasswordRequestBody,
  ChangePasswordResponse,
  LeaveDetailResponse,
  LeaveResponse,
  PolicyDetailResponse,
  PolicyResponse,
  UserProfileResponse,
} from '../../interfaces/ApiInterfaces';

import { apiMethods, baseApi } from '../api';
import { Endpoints } from '../Endpoints';

const getUserProfile = (employeeId: string) => {
  return {
    url: `${Endpoints.userProfile}${employeeId}`,
  };
};
const updateUserProfile = (body: FormData) => {
  return {
    url: Endpoints.userProfileUpdate,
    method: apiMethods.post,
    body,
    headers: {
      Accept: 'application/json',
    },
  };
};
const changeUserPassword = (body: ChangePasswordRequestBody) => {
  return {
    url: Endpoints.userChangePassword,
    method: apiMethods.post,
    body,
  };
};
const getPolicies = () => {
  return {
    url: Endpoints.policies,
    method: apiMethods.get,
  };
};
const getPolicyDetails = (id: string) => {
  return {
    url: `${Endpoints.policies}/${id}`,
    method: apiMethods.get,
  };
};
const getLeaves = () => {
  return {
    url: `${Endpoints.leave}`,
    method: apiMethods.get,
  };
};
const getLeaveDetails = (id: string) => {
  return {
    url: `${Endpoints.leave}/${id}`,
    method: apiMethods.get,
  };
};
const addLeaveRequest = (body: FormData) => {
  return {
    url: Endpoints.leave,
    method: apiMethods.post,
    body: body,
    // headers: {
    //   Accept: 'application/json',
    // },
  };
};
const payrollCheck = (body: FormData) => {
  return {
    url: Endpoints.payrollCheck,
    method: apiMethods.post,
    body: body,
  };
};

//API
export const AppApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getUserProfile: build.query<UserProfileResponse, any>({
      query: getUserProfile,
    }),
    updateUserProfile: build.mutation<any, FormData>({
      query: updateUserProfile,
    }),
    changeUserPassword: build.mutation<
      ChangePasswordResponse,
      ChangePasswordRequestBody
    >({
      query: changeUserPassword,
    }),
    getPolicies: build.query<PolicyResponse, any>({
      query: getPolicies,
    }),
    getPolicyDetail: build.query<PolicyDetailResponse, any>({
      query: getPolicyDetails,
    }),
    getLeaves: build.query<LeaveResponse, any>({
      query: getLeaves,
    }),
    getLeaveDetails: build.query<LeaveDetailResponse, any>({
      query: getLeaveDetails,
    }),
    addLeaveRequest: build.mutation({
      query: addLeaveRequest,
    }),
    payrollCheck: build.mutation({
      query: payrollCheck,
    }),
  }),
  overrideExisting: true,
});

export const {
  useGetUserProfileQuery,
  useLazyGetUserProfileQuery,
  useUpdateUserProfileMutation,
  useChangeUserPasswordMutation,
  useGetPoliciesQuery,
  useGetPolicyDetailQuery,
  useGetLeavesQuery,
  useLazyGetLeavesQuery,
  useGetLeaveDetailsQuery,
  useAddLeaveRequestMutation,
  usePayrollCheckMutation,
} = AppApi;
