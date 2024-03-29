import apiClient from './index';
import { Dating } from '@/types/dating';
import { AxiosResponse } from 'axios';
import { MatchingResultResponse } from '@/types/meeting';

export const getDatingMatching = async () => {
  const res = await apiClient.get<MatchingResultResponse>('/dating/matching');
  return res.data;
};

export const postDatingMatching = async () => {
  const res = await apiClient.post('/dating/matching');
  return res.data;
};

export const postDatingSurvey = async (payload: Dating) => {
  const res = await apiClient.post<AxiosResponse>('/dating/survey', payload);
  return res.data;
};

export const patchDatingSurvey = async (payload: Partial<Dating>) => {
  const res = await apiClient.patch('/dating/survey', payload);
  return res.data;
};

export const getDatingSurvey = async () => {
  const res = await apiClient.get<Dating>('/dating/survey');
  return res.data;
};

export const putDatingSurvey = async (payload: Dating) => {
  const res = await apiClient.put<AxiosResponse>('/dating/survey', payload);
  return res.data;
};

export const postReMatchDatingSurvey = async () => {
  const res = await apiClient.post('/dating/survey/rematch');
  return res.data;
};
