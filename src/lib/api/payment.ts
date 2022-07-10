import apiClient from './index';
import { SERVER_URL } from '../constants';
import { PartnerAuth } from '@/types/payment';

export const getPartnerAuth = async (): Promise<PartnerAuth | undefined> => {
  try {
    const res = await apiClient.post('/api/payment');
    return res.data;
  } catch (e) {
    console.error(e);
  }
};
