import axiosInstance from '../../services/axiosInstance';
import { LOGIN_FIELDS, REGISTER_FIELDS } from '../../constants/authFields';
import { FORGOT_PASSWORD_FIELDS } from '../../constants/authFields';

export const loginApi = async (data: {
  email: string;
  password: string;
}) => {
  const response = await axiosInstance.post('/api/auth/login', {
    [LOGIN_FIELDS.email]: data.email,
    [LOGIN_FIELDS.password]: data.password,
  });

  return response.data; // { token }
};

export const registerApi = async (data: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}) => {
  const response = await axiosInstance.post('/api/auth/register', {
    [REGISTER_FIELDS.firstName]: data.firstName,
    [REGISTER_FIELDS.lastName]: data.lastName,
    [REGISTER_FIELDS.email]: data.email,
    [REGISTER_FIELDS.password]: data.password,
  });

  return response.data;
};

export const forgotPasswordApi = async (data: {
  email: string;
}) => {
  const response = await axiosInstance.post(
    '/api/auth/forgot-password',
    {
      [FORGOT_PASSWORD_FIELDS.email]: data.email,
    }
  );

  return response.data;
};
