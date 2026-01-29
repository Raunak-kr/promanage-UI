import { createSlice } from '@reduxjs/toolkit';
import { jwtDecode } from 'jwt-decode';

interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  role: string | null;
}

const token = localStorage.getItem('token');

const initialState: AuthState = {
  token,
  isAuthenticated: !!token,
  role: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState, // ✅ yahin use karo
  reducers: {
    loginSuccess(state, action) {
      const token = action.payload;

      const decoded: any = jwtDecode(token);

      state.token = token;
      state.isAuthenticated = true;
      state.role =
        decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];

      localStorage.setItem('token', token);
    },
    logout(state) {
      state.token = null;
      state.isAuthenticated = false;
      state.role = null;
      localStorage.removeItem('token');
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
