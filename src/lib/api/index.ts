import axios from 'axios';

const host = import.meta.env.VITE_SERVER_URL;

const apiClient = axios.create({
  baseURL: host,
  withCredentials: true,
});
// apiClient.interceptors.request.use(
//   (config) => {
//     if (!config?.headers) {
//       throw new Error(`Expected 'config' and 'config.headers' not to be undefined`);
//     }
//     const tokens = getTokens();
//     if (!tokens) throw new Error('No tokens found');

//     const { accessToken, refreshToken } = tokens;
//     config.headers.accessToken = `Bearer ${accessToken}`;
//     config.headers.refreshToken = `Bearer ${refreshToken}`;
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   },
// );
export default apiClient;
