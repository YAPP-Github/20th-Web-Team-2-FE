import axios from 'axios';

const host = import.meta.env.VITE_SERVER_URL;

const apiClient = axios.create({
  // baseURL: host,
  withCredentials: true,
});
export default apiClient;
