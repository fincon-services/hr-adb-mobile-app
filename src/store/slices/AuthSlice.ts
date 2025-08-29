import { createSlice } from '@reduxjs/toolkit';
interface AuthState {
  user: Object | null;
  token: string | null;
}
const initialState: AuthState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logout: state => {
      state.token = null;
      state.user = null;
    },
  },
});

export const getUser = (state: any) => state?.auth?.user;
export const getToken = (state: any) => state?.auth?.token;

export const { setToken, setUser, logout } = authSlice.actions;
export default { initialState, reducer: authSlice?.reducer };
