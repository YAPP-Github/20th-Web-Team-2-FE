import apiClient from '.';

export const getAboardAreaAPI = async () => {
  const res = await apiClient.get('/areas');
  console.log(res);

  return res.data;
};

export const postAboardAreaAPI = async (body: { id: number; name: string }) => {
  const res = await apiClient.post('/areas', body);
  return res.data;
};
