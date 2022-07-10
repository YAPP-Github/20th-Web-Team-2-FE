import client from '@/lib/api';
import qs from 'qs';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OauthKakao = () => {
  const [token, setToken] = useState('');
  const code = new URL(window.location.href).searchParams.get('code');
  const navigate = useNavigate();
  useEffect(() => {
    const getToken = async () => {
      const response = await client.get(`/oauth/kakao?code=${code}`);
      setToken(response.data);
      // setToken을 세션에 넣는 로직으로 변경
    };
    getToken();
    // navigate('/');
  }, []);
  console.log(token);

  // const getToken = async () => {
  //   const payload = qs.stringify({
  //     grant_type: "authorization_code",
  //     client_id: REST_API_KEY,
  //     redirect_uri: REDIRECT_URI,
  //     code: code,s
  //     client_secret: CLIENT_SECRET,
  //   });
  // get(oauth/kakao?code=3yk5-JBiG4p3CVxzPJV32WoJqfE220Kjar9XA2Aemd9TbTKQxkxAyILMZaXcC-_Rj4jLrQo9dVwAAAGBv0F2KQ)
  return <div>{token}</div>;
};

export default OauthKakao;
