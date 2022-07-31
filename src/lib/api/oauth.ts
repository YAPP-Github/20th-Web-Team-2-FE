import apiClient from '@/lib/api/index';

export const getOauthKakaoAge = async (params: { code: string; type: 'dating' | 'meeting' }) => {
  const res = await apiClient.get(`/oauth/kakao/age?code=${params.code}&type=${params.type}`);
  return res.data;
};
