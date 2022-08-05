import axios from 'axios';
import { SERVER_URL } from '@/lib/constants';
import Cookies from 'js-cookie';
import surveyStorage from '@/utils/surveyStorage';
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
        alert('로그인 시간이 만료되었습니다. 메인으로 이동합니다. 다시 로그인 해주세요!');
        await resetAuth();
        break;
      case 'INACTIVE_USER':
        alert('비정상적인 유저입니다.');
        await resetAuth();
        break;
      default:
        throw new Error(response.data.message);
    }
  },
);
export default apiClient;
