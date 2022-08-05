import { postLogout } from '@/lib/api/user';
import Cookies from 'js-cookie';
import surveyStorage from './surveyStorage';

export async function resetAuth() {
  Cookies.remove('AccessToken');
  Cookies.remove('authenticated');
  surveyStorage.remove();
  window.location.replace('https://lonessum.com/');
}
