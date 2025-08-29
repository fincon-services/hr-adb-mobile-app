import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Alert } from 'react-native';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://40.87.80.211:1602/las-backend/public/api/v1/',
  prepareHeaders: (headers, { getState }: any) => {
    const token = getState()?.auth?.token;
    console.log(token, 'tokenAccesss');
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
      return headers;
    }
  },
});
const baseQueryWithInterceptor = async (
  args: any,
  api: any,
  extraOptions: any,
) => {
  console.log('Request:', args, api, api.baseUrl);
  let result = await baseQuery(args, api, extraOptions);
  if (typeof args === 'object' && args?.body) {
    console.log('Request Body:', JSON.stringify(args?.body));
  }
  if (result.error && result.error.status === 401) {
    Alert.alert('Unauthorized', 'Please log in again.');
  }
  console.log('Response API Result:', result);
  return result;
};

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithInterceptor,
  endpoints: () => ({}),
});

//Methods
export const apiMethods = {
  get: 'GET',
  post: 'POST',
  patch: 'PATCH',
  put: 'PUT',
  delete: 'DELETE',
};
