import apiClient from './index';
import { LoginResponse, LoginRequest } from '@/types/user';
import { AxiosResponse } from 'axios';
/*
  @desc
  임시 아이디 비번: test1
*/

export const postLogin = async (payload: LoginRequest): Promise<LoginResponse | undefined> => {
  try {
    const joinRes = await apiClient.post<AxiosResponse>('/join', payload);
    if (joinRes.status === 200) {
      const res = await apiClient.post('/login', payload);
      return res.data;
    }
    throw new Error(joinRes.statusText);
  } catch (e) {
    console.error(e);
  }
};
