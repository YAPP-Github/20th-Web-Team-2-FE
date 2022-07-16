import apiClient from './index';
import { LoginResponse, LoginRequest } from '@/types/user';

/*
  @desc
  임시 아이디 비번: test1
*/

export const postLogin = async (payload: LoginRequest): Promise<LoginResponse | undefined> => {
  try {
    const res = await apiClient.post('/login', payload);

    if (res.status !== 200 && res.status !== 201) {
      throw new Error(res.data.message);
    }
    console.log(res, 'res');
    return res.data;
  } catch (e) {
    console.error(e);
  }
};
