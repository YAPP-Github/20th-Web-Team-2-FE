import apiClient from './index';
import { Meeting } from '@/types/meeting';
import { AxiosResponse } from 'axios';

export const postMeetingSurvey = async (payload: Meeting) => {
  try {
    const res = await apiClient.post<AxiosResponse>('/meeting/survey', payload);
    return res.data;
  } catch (e) {
    alert(e.message);
  }
};
