import apiClient from './index';
import { LoginResponse, LoginRequest, KakaoIdResponse } from '@/types/user';
/*
  @desc
  임시 아이디 비번: test1
*/

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

/* @FIXME: 나중에 user.ts로 바꾸기 */
export const postLogout = async () => {
  const res = await apiClient.post('/logout');
  return res.data;
};
