import apiClient from './index';
import { LoginResponse, LoginRequest } from '@/types/user';
/*
  @desc
  임시 아이디 비번: test1
*/

export const postLogin = async (payload: LoginRequest): Promise<LoginResponse | undefined> => {
  try {
    const res = await apiClient.post('/login', payload);
    return res.data;
  } catch (e) {
    alert(e.message);
  }
};
