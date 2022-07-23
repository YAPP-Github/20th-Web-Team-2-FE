import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import { Modal } from '@/components/base/index';
import { useToggle } from '@/hooks/common';
import { useNavigate } from 'react-router-dom';

const LoginCheck = () => {
  const navigate = useNavigate();
  const [isErrorModal, onToggleErrorModal] = useToggle();

  useEffect(() => {
    const token = Cookies.get('AccessToken');
    const invalidToken = !token || token === 'undefined';
    invalidToken && onToggleErrorModal();
  }, []);

  return (
    <>
      {isErrorModal && (
        <Modal
          width={200}
          height={140}
          bottonName="확인"
          title="알림"
          text="로그인 후에 설문 진행 가능합니다."
          onToggleModal={onToggleErrorModal}
          onClick={() => navigate('/')}
        />
      )}
    </>
  );
};

export default LoginCheck;
