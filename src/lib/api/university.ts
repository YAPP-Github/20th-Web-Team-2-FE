import apiClient from '.';

export const getUnivAPI = async () => {
  const res = await apiClient.get('/university');
  return res.data;
};

export const postUnivAPI = async (body: { id: number; name: string }) => {
  const res = await apiClient.post('/university', body);
  return res.data;
};
