import client from '@/lib/api';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Path from '@/router/Path';

const OauthKakao = () => {
  const code = new URL(window.location.href).searchParams.get('code');
  const navigate = useNavigate();

  useEffect(() => {
    initiate();
  }, []);

  const initiate = async () => {
    try {
      const data = await getKakaoLoginInfo();
      setKakaoLoginInfo(data);
      data.authenticated ? navigate(Path.LandingPage) : navigate(Path.AuthMail);
    } catch (error) {
      console.log(error);
    }
  };

  const getKakaoLoginInfo = async () => {
    const response = await client.get(`/oauth/kakao?code=${code}`);
    return response.data;
  };

  const setKakaoLoginInfo = (data: any) => {
    Cookies.set('AccessToken', data.accessToken, { expires: data.expires_in });
    Cookies.set('authenticated', data.authenticated, { expires: data.expires_in });
  };

  return <div></div>;
};

export default OauthKakao;
