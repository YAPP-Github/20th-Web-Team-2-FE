import axios from 'axios';
import Cookies from 'js-cookie';

const host = import.meta.env.VITE_SERVER_URL;

const apiClient = axios.create({
  // baseURL: host,
  withCredentials: true,
  headers: {
    Authorization: Cookies.get('AccessToken'),
  },
});
export default apiClient;
