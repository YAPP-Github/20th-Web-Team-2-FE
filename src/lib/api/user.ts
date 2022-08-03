import apiClient from './index';
import { LoginResponse, LoginRequest, KakaoIdResponse } from '@/types/user';

export const postJoin = async (payload: LoginRequest): Promise<LoginResponse | undefined> => {
  const res = await apiClient.post('/join', payload);
  return res.data;
};

export const postLogin = async (payload: LoginRequest): Promise<LoginResponse | undefined> => {
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

export const postWithdraw = async () => {
  const res = await apiClient.delete('/withdraw');
  return res.data;
};

export const getMyInfo = async () => {
  const res = await apiClient.get('/myInfo');
  return res.data;
};
