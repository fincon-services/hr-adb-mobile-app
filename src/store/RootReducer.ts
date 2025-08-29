import { combineReducers } from '@reduxjs/toolkit';
import { baseApi } from '../services/api';
import AuthSlice from './slices/AuthSlice';

export const rootReducers = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  auth: AuthSlice.reducer,
});
