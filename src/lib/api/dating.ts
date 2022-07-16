import apiClient from './index';
import { Dating } from '@/types/dating';
import { AxiosResponse } from 'axios';

export const postDatingSurvey = async (payload: Dating) => {
  try {
    const res = await apiClient.post<AxiosResponse>('/dating/survey', payload);
    return res.data;
  } catch (e) {
    alert(e.message);
  }
};
