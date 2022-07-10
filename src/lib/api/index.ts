import axios from 'axios';
import { SERVER_URL } from '@/lib/constants';

const apiClient = axios.create({
  // baseURL: SERVER_URL,
  withCredentials: true,
});
export default apiClient;
