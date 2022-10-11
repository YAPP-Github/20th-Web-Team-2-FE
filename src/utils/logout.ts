import Cookies from 'js-cookie';
import surveyStorage from './surveyStorage';

export async function resetAuth() {
  Cookies.remove('AccessToken');
  surveyStorage.remove();
  window.location.replace('https://lonessum.com/');
}
