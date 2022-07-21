import apiClient from './index';
import { AxiosResponse } from 'axios';

export const getMeetingUsers = async () => {
  const res = await apiClient.get<AxiosResponse>('/admin');
  return res.data;
};

export const getDatingUsers = async () => {
  const res = await apiClient.get<AxiosResponse>('/admin');
  return res.data;
};
