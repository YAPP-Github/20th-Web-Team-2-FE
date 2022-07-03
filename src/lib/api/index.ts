import axios from 'axios';

const host = import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY;
const apiClient = axios.create({
  baseURL: host,
  withCredentials: false,
});

export default apiClient;
