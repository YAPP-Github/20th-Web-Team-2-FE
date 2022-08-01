import client from '@/lib/api/index';

export const postEmail = async (email: string) => {
  const response = await client.post(`/email`, { email });
  return response.data;
};

export const putEmail = async (authCode: string) => {
  const response = await client.put(`/email`, { authCode });
  return response.data;
};

export const postEmailDomain = async (body: { domain: string; name: string }) => {
  await client.put(`/email/test/new-email`, body);
};
