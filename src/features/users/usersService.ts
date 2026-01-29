import axiosInstance from '../../services/axiosInstance';

export const getUsersApi = async () => {
  const response = await axiosInstance.get('/api/users');
  return response.data;
};
