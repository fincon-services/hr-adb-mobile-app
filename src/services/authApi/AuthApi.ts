import {
  LoginRequestBody,
  LoginResponse,
} from '../../interfaces/ApiInterfaces';
import { apiMethods, baseApi } from '../api';
import { Endpoints } from '../Endpoints';

const login = (body: LoginRequestBody) => {
  return {
    url: Endpoints.login,
    method: apiMethods.post,
    body,
  };
};

//API
export const AuthApi = baseApi.injectEndpoints({
  endpoints: build => ({
    login: build.mutation<LoginResponse, LoginRequestBody>({
      query: login,
    }),
  }),
});

export const { useLoginMutation } = AuthApi;
