import apiClient from './index';
import { LoginResponse, LoginRequest, KakaoIdResponse } from '@/types/user';

export const postJoin = async (payload: LoginRequest): Promise<LoginResponse | undefined> => {
  const res = await apiClient.post('/join', payload);
  return res.data;
};

export const postLogin = async (payload: LoginRequest): Promise<LoginResponse | undefined> => {
  await apiClient.post('/join', payload);
  const res = await apiClient.post('/login', payload);
  return res.data;
};

export const getKakaoId = async () => {
  const res = await apiClient.get<KakaoIdResponse>('/id');
  return res.data;
};

export const postLogout = async () => {
  const res = await apiClient.get('/logout');
  return res.data;
};

export const postWithdrawal = async () => {
  const res = await apiClient.post('/withdrawal');
  return res.data;
};
