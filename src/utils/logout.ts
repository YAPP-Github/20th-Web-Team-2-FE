import Path from '@/router/Path';
import Cookies from 'js-cookie';

export function logout() {
  Cookies.remove('AccessToken');
  window.location.replace(Path.LandingPage);
}
