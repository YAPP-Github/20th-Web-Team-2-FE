import axios from 'axios';
import { SERVER_URL } from '@/lib/constants';
import Cookies from 'js-cookie';

const apiClient = axios.create({
  baseURL: SERVER_URL,
  withCredentials: false,
  headers: {
    Authorization: Cookies.get('AccessToken') ?? '',
});

export default apiClient;
