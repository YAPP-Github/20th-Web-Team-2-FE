export const goKakaoLogin = (type: 'login' | 'meeting' | 'dating') => {
  const clientId = import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY;
  const path = type === 'login' ? '/oauth/kakao' : `/${type}/agreement`;
  const query = type === 'login' ? '&prompt=login' : '&scope=age_range';
  const redirectUri = encodeURI(`${window.location.origin}${path}`);

  window.location.href = import.meta.env.VITE_KAKAO_OPEN_URL.replace('{clientId}', clientId).replace('{redirectUri}', redirectUri) + query;
};
