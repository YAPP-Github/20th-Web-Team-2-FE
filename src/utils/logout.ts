import Cookies from 'js-cookie';

export function logout() {
  window.location.replace('https://lonessum.com/');
  Cookies.remove('AccessToken');
}
