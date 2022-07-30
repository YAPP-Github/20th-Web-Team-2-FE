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
      const data = await getToken();
      setToken(data);
      data.authenticated ? navigate(Path.TypeOfMeetingSurvey) : navigate(Path.AuthMail);
    } catch (error) {
      console.log(error);
    }
  };

  const getToken = async () => {
    const response = await client.get(`/oauth/kakao?code=${code}`);
    console.log(response.data);
    return response.data;
  };

  const setToken = (data: any) => {
    Cookies.set('AccessToken', data.accessToken, { expires: data.expires_in });
    Cookies.set('authenticated', data.authenticated, { expires: data.expires_in });
    console.log(data.accessToken);
  };

  return <div></div>;
};

export default OauthKakao;
