import apiClient from '.';

export const getUnivAPI = async () => {
  const response = await apiClient.get('/university');
  return response.data;
};

export const postUnivAPI = async (body: { id: number; name: string }) => {
  const response = await apiClient.post('/university', body);
  return response.data;
};
