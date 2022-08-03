import React, { useEffect, useState } from 'react';
import { Logo, Logout } from '@/assets/img';
import { palette } from '@/lib/styles/palette';
import styled from 'styled-components';
import DatingInfoBox from './DatingInfoBox';
import MeetingInfoBox from './MeetingInfoBox';
import { postLogout, postWithdraw } from '@/lib/api/user';
import { useToggle } from '@/hooks/common';
import { Modal } from '../base';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import useMyInfoLoad from '@/hooks/user/useMyInfoLoad';
import surveyStorage from '@/utils/surveyStorage';

interface MenuBlockProps {
  isMenu: boolean;
  onToggleMenu: () => void;
}

function MenuBlock({ isMenu, onToggleMenu }: MenuBlockProps) {
  const [errorMessage, setErrorMessage] = useState('에러가 발생했습니다😭 다시한번 시도해 주세요!');
  const { info } = useMyInfoLoad();
  const [isConfirm, setConfirm] = useState(false);
  const [isModal, onToggleModal] = useToggle();
  const [isErrorModal, onToggleErrorModal] = useToggle();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await postLogout();
      Cookies.remove('AccessToken');
      Cookies.remove('authenticated');
      surveyStorage.remove();
      navigate('/');
    } catch (e) {
      setErrorMessage((e as any).message);
      onToggleErrorModal();
    }
  };

  const handleWithdraw = async () => {
    try {
      if (isConfirm) {
        await postWithdraw();
        Cookies.remove('AccessToken');
        Cookies.remove('authenticated');
        navigate('/');
      }
    } catch (e) {
      setErrorMessage((e as any).message);
      onToggleErrorModal();
    }
  };

  useEffect(() => {
    if (isConfirm) {
      handleWithdraw();
    }
  }, [isConfirm]);

  return (
    <>
      <NavBarBlock isMenu={isMenu}>
        <SidebarHeader>
          <UserInfo>
            <SiteLogo src={Logo} alt="사이트 로고" />
            <UserBox>
              <strong>{info?.email}</strong>
              <div className="univ">{info?.university}</div>
            </UserBox>
          </UserInfo>
          <LogoutButton onClick={handleLogout}>
            <img src={Logout} />
          </LogoutButton>
        </SidebarHeader>
        <MeetingInfoBox />
        <DatingInfoBox />
        <WithdrawalButton onClick={onToggleModal}>탈퇴하기</WithdrawalButton>
      </NavBarBlock>
      <NavBackground onClick={onToggleMenu} isMenu={isMenu} />
      {isModal && (
        <Modal
          width={200}
          height={140}
          bottonName="확인"
          title="정말 탈퇴하시겠습니까?"
          text="탈퇴하면 모든 설문정보가<br />
          사라집니다."
          onToggleModal={onToggleModal}
          onClick={() => setConfirm(true)}
        />
      )}
      {isErrorModal && (
        <Modal
          width={200}
          height={140}
          bottonName="확인"
          title="알림"
          text={errorMessage}
          onToggleModal={onToggleErrorModal}
          onClick={() => {
            void 0;
          }}
        />
      )}
    </>
  );
}

const NavBackground = styled.div<{ isMenu: boolean }>`
  width: 100%;
  height: 100%;
  background-color: black;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 800;
  opacity: 0.5;
  ${({ isMenu }) => (isMenu ? 'display: block' : 'display: none')}
`;

const NavBarBlock = styled.section<{ isMenu: boolean }>`
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${palette.white};
    border-radius: 0px 10px 10px 0;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${palette.grayLight};
    border-radius: 12px;
    background-clip: padding-box;
    border: 1px solid transparent;
  }
  width: 100%;
  max-width: 300px;
  position: fixed;
  height: 100vh;
  top: 0;
  right: 0;
  background: ${palette.white};
  z-index: 1000;
  padding: 16px;
  ${({ isMenu }) => (isMenu ? 'visibility: visible' : 'visibility : hidden')};
  transition: all 0.2s ease-in-out;
  transform: translateX(${({ isMenu }) => (isMenu ? 'calc(100vw-300px)' : '100vw')});
`;
const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const UserInfo = styled.div`
  display: flex;
`;

const SiteLogo = styled.img`
  width: 45px;
  border-radius: 100%;
  padding-right: 6px;
`;
const UserBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 4px;

  strong {
    font-size: 14px;
    width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .univ {
    font-size: 13px;
    font-weight: 400;
    color: ${palette.grayDark};
    padding-top: 2px;
  }
`;

const LogoutButton = styled.button`
  padding-left: 5px;

  img {
    width: 14px;
    height: 14px;
  }
`;

const WithdrawalButton = styled.button`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding-top: 20px;
  font-size: 10px;
  color: ${palette.grayDark};
`;

export default MenuBlock;
