import axios from 'axios';
import { SERVER_URL } from '@/lib/constants';

const apiClient = axios.create({
  baseURL: SERVER_URL,
  withCredentials: false,
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
