import { postLogout } from '@/lib/api/user';
import Cookies from 'js-cookie';
import surveyStorage from './surveyStorage';

export async function logout() {
  await postLogout();
  Cookies.remove('AccessToken');
  Cookies.remove('authenticated');
  surveyStorage.remove();
  window.location.replace('https://lonessum.com/');
}
