import { useEffect } from 'react';
import Cookies from 'js-cookie';
import { atom, useRecoilState } from 'recoil';

const isLoginData = atom<boolean>({
  key: 'loginState',
  default: false,
});

const useLoginState = () => {
  const [isLogin, setLogin] = useRecoilState<boolean>(isLoginData);

  useEffect(() => {
    const hasAccessToken = Boolean(Cookies.get('AccessToken'));
    setLogin(hasAccessToken);
  }, []);

  return {
    isLogin,
  };
};

export { useLoginState };
