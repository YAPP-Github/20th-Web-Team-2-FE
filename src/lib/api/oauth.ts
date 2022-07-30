import apiClient from '@/lib/api/index';

export const getOauthKakaoAge = async (params: { code: string }) => {
  const res = await apiClient.get(`/oauth/kakao/age&code=${params.code}`);
  return res.data;
};
