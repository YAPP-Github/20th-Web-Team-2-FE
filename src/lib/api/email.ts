import client from '@/lib/api/index';

export const postEmail = async (email: string) => {
  await client.post(`/email`, { email });
};

export const putEmail = async (authCode: string) => {
  await client.put(`/email`, { authCode });
};
