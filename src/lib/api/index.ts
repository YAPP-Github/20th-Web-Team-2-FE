import axios from 'axios';
import { SERVER_URL } from '@/lib/constants';
import Cookies from 'js-cookie';
import { logout } from '@/utils/logout';

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
    switch (response.data.code) {
      case 'INVALID_JWT':
        alert('로그인 시간이 만료되었습니다. 다시 로그인 해주세요');
        logout();
        break;

      default:
        throw new Error(response.data.message);
    }
  },
);
export default apiClient;
