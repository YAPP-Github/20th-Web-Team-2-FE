import apiClient from './index';
import { Meeting, MeetingMatchingResultResponse } from '@/types/meeting';
import { AxiosResponse } from 'axios';

export const postMeetingSurvey = async (payload: Meeting) => {
  const res = await apiClient.post<AxiosResponse>('/meeting/survey', payload);
  return res.data;
};

export const getMeetingSurvey = async () => {
  const res = await apiClient.get<Meeting>('/meeting/survey');
  return res.data;
};

export const postReMatchMettingSurvey = async () => {
  const res = await apiClient.post('/meeting/survey/rematch');
  return res.data;
};

export const postMeetingMatching = async () => {
  const res = await apiClient.post('/meeting/matching');
  return res.data;
};

export const getMeetingMatching = async () => {
  const res = await apiClient.get<MeetingMatchingResultResponse>('/meeting/matching');
  return res.data;
};
