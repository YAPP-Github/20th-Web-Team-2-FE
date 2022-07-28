import client from '@/lib/api';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Path from '@/router/Path';

const OauthKakao = () => {
  const code = new URL(window.location.href).searchParams.get('code');
  // const navigate = useNavigate();
  useEffect(() => {
    try {
      const data = getToken();
      setToken(data);
      // navigate(Path.AuthMail);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getToken = async () => {
    const response = await client.get(`/oauth/kakao?code=${code}`);
    console.log(response.data);
    return response.data;
  };

  const setToken = (data: any) => {
    Cookies.set('AccessToken', data.AccessToken, { expires: data.expires_in });
    console.log(data.AccessToken);
  };

  return <div></div>;
};

export default OauthKakao;
