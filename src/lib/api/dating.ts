import apiClient from './index';
import { Dating } from '@/types/dating';
import { AxiosResponse } from 'axios';

export const postDatingSurvey = async (payload: Dating) => {
  const res = await apiClient.post<AxiosResponse>('/dating/survey', payload);
  return res.data;
};

export const getDatingSurvey = async () => {
  const res = await apiClient.get<Dating>('/dating/survey');
  return res.data;
};
