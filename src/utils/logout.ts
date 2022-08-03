import { postWithdraw } from '@/lib/api/user';
import Cookies from 'js-cookie';

export async function logout() {
  await postWithdraw();
  Cookies.remove('AccessToken');
  Cookies.remove('authenticated');
  window.location.replace('https://lonessum.com/');
}
