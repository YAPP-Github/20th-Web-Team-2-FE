import client from '@/lib/api/index';

export const postEmail = async (email: string) => {
  await client.post(`/email`, { email });
};

export const putEmail = async (authCode: string) => {
  const response = await client.put(`/email`, { authCode });
  return response;
};

export const postEmailDomain = async (body: { domain: string; name: string }) => {
  await client.put(`/email/test/new-email`, body);
};
