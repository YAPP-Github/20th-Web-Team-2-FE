import axios from 'axios';
import { SERVER_URL } from '@/lib/constants';
import Cookies from 'js-cookie';
import { resetAuth } from '@/utils/logout';

const apiClient = axios.create({
  baseURL: SERVER_URL,
  withCredentials: false,
});

apiClient.interceptors.request.use(
  (config) => {
    if (!config?.headers) {
      throw new Error(`Expected 'config' and 'config.headers' not to be undefined`);
    }
    const token = Cookies.get('AccessToken');
    config.headers.Authorization = token || '';
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const { response } = error;
    console.log(response.data.message);
    switch (response.data.code) {
      case 'INVALID_JWT':
        await resetAuth();
        break;
      case 'INACTIVE_USER':
        await resetAuth();
        break;
      default:
        throw new Error(response.data.message);
    }
  },
);
export default apiClient;
