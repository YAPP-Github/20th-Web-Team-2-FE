import apiClient from './index';
import { AdminPaymentTargets } from '@/types/user';

export const getMeetingPaymentTargets = async () => {
  const res = await apiClient.get<AdminPaymentTargets[]>('/admin/meeting/payment-targets');
  return res.data;
};

export const getDatingPaymentTargets = async () => {
  const res = await apiClient.get<AdminPaymentTargets[]>('/admin/dating/payment-targets');
  return res.data;
};

export const patchMeetingPayment = async (kakaoId: string) => {
  const res = await apiClient.patch<{ isPaid: boolean }>('/admin/users/meeting/payment', { kakaoId });
  return res.data;
};

export const patchDatingPayment = async (kakaoId: string) => {
  const res = await apiClient.patch<{ isPaid: boolean }>('/admin/users/dating/payment', { kakaoId });
  return res.data;
};
