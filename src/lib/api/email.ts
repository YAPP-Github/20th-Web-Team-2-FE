import client from '@/lib/api/index';

export const postEmail = async (email: string) => {
  await client.post(`/api/email`, { email });
};

export const putEmail = async (authCode: string) => {
  await client.put(`/api/email`, { authCode });
};
