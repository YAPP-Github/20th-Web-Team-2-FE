import apiClient from './index';
import { AdminUsersStatus } from '@/types/user';

export const getMeetingUsers = async () => {
  const res = await apiClient.get<AdminUsersStatus[]>('/admin/users/meeting/status');
  return res.data;
};

export const getDatingUsers = async () => {
  const res = await apiClient.get<AdminUsersStatus[]>('/admin/users/dating/status');
  return res.data;
};

export const patchMeetingPayment = async (kakaoId: string) => {
  const res = await apiClient.patch<AdminUsersStatus[]>('/admin/users/meeting/payment', { kakaoId });
  return res.data;
};

export const patchDatingPayment = async (kakaoId: string) => {
  const res = await apiClient.patch<AdminUsersStatus[]>('/admin/users/dating/payment', { kakaoId });
  return res.data;
};
