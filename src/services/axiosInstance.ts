import axios from 'axios';
import { store } from '../app/store';
import { logout } from '../features/auth/authSlice';

const axiosInstance = axios.create({
  baseURL: 'https://localhost:7286',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);
// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response && error.response.status === 401) {
//       // token invalid / expired
//       localStorage.removeItem('token');

//       // force redirect to login
//       window.location.href = '/login';
//     }

//     return Promise.reject(error);
//   }
// );
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      store.dispatch(logout());
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
