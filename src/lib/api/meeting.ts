import apiClient from './index';
import { Meeting, MatchingResultResponse } from '@/types/meeting';
import { AxiosResponse } from 'axios';

export const postMeetingSurvey = async (payload: Meeting) => {
  const res = await apiClient.post<AxiosResponse>('/meeting/survey', payload);
  return res.data;
};

export const getMeetingSurvey = async () => {
  const res = await apiClient.get<Meeting>('/meeting/survey');
  return res.data;
};

export const patchMeetingSurvey = async (payload: Partial<Meeting>) => {
  const res = await apiClient.patch<AxiosResponse>('/meeting/survey', payload);
  return res.data;
};

export const postReMatchMeetingSurvey = async () => {
  const res = await apiClient.post('/meeting/survey/rematch');
  return res.data;
};

export const postMeetingMatching = async () => {
  const res = await apiClient.post('/meeting/matching');
  return res.data;
};

export const getMeetingMatching = async () => {
  const res = await apiClient.get<MatchingResultResponse>('/meeting/matching');
  return res.data;
};
