export const goKakaoLogin = (type: 'LOGIN' | 'ADDITIONAL') => {
  const clientId = import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY;
  const path = type === 'LOGIN' ? '/oauth/kakao' : '/dating/agreement';
  const query = type === 'LOGIN' ? '&prompt=login' : '&scope=age_range';
  const redirectUri = encodeURI(`${window.location.origin}${path}`);

  window.location.href = import.meta.env.VITE_KAKAO_OPEN_URL.replace('{clientId}', clientId).replace('{redirectUri}', redirectUri) + query;
};
