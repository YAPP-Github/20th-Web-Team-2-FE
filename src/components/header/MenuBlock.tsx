import { Logo } from '@/assets/img';
import { palette } from '@/lib/styles/palette';
import { Dating } from '@/types/dating';
import { Meeting } from '@/types/meeting';
import React from 'react';
import styled from 'styled-components';
import DatingInfoBox from './DatingInfoBox';
import MeetingInfoBox from './MeetingInfoBox';

interface MenuBlockProps {
  isMenu: boolean;
  onToggleMenu: () => void;
}
/**
 * 임시 유저 데이터
 */
const TempUserData = {
  email: 'coffee123@naver.com',
  univ: 'Boston University',
};

const TempMeetingData: Meeting = {
  typeOfMeeting: 'ONE',
  gender: 'FEMALE',
  averageAge: 28,
  ourUniversities: [],
  ourDepartments: ['LIBERAL', 'SCIENCE'],
  averageHeight: 170,
  avoidUniversities: [],
  preferUniversities: [],
  preferAge: [20, 25],
  preferHeight: [140, 180],
  preferDepartments: ['LIBERAL', 'SCIENCE'],
  mindset: 'ALL',
  play: 'ALL',
  isAbroad: false,
  domesticAreas: ['SNW', 'SNE', 'SSW', 'SSE'],
  abroadAreas: [],
  channel: 'FACEBOOK',
  agreement: true,
  kakaoId: '',
};
const TempDatingData: Dating = {
  gender: 'FEMALE',
  age: 28,
  myDepartment: 'LIBERAL',
  characteristic: 'A_LITTLE_ACTIVE',
  mbti: 'INFP',
  myHeight: 0,
  myBody: 'SKINNY',
  mySmoke: true,
  myDateCount: 'ZERO',
  isSmokeOk: true,
  avoidUniversities: [],
  preferUniversities: [],
  preferAge: [20, 28],
  preferHeight: [140, 180],
  preferDepartments: ['LIBERAL', 'SCIENCE'],
  preferCharacteristics: ['VERY_QUIET', 'A_LITTLE_QUIET'],
  preferBodies: ['SKINNY', 'SLIM'],
  preferDateCount: 'ZERO',
  isAbroad: false,
  domesticAreas: ['SNW', 'SNE', 'SSW', 'SSE'],
  abroadAreas: [],
  channel: 'FACEBOOK',
  agreement: true,
  kakaoId: '',
};
function MenuBlock({ isMenu, onToggleMenu }: MenuBlockProps) {
  return (
    <>
      <NavBarBlock isMenu={isMenu}>
        <SidebarHeader>
          <SiteLogo src={Logo} alt="사이트 로고" />
          <UserBox>
            <div>{TempUserData.email}</div>
            <div className="univ">{TempUserData.univ}</div>
          </UserBox>
        </SidebarHeader>
        <MeetingInfoBox meeting={TempMeetingData} />
        <DatingInfoBox dating={TempDatingData} />
      </NavBarBlock>
      <NavBackground onClick={onToggleMenu} isMenu={isMenu} />
    </>
  );
}

const NavBackground = styled.div<{ isMenu: boolean }>`
  width: 100%;
  height: 100vh;
  background-color: black;
  position: absolute;
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
  position: absolute;
  height: 100vh;
  top: 0;
  right: 0;
  background: ${palette.white};
  z-index: 1000;
  padding: 16px;
  ${({ isMenu }) => (isMenu ? 'visibility: visible' : 'visibility : hidden')};
  transition: all 0.2s ease-in-out;
  transform: translateX(${({ isMenu }) => (isMenu ? '0px' : '300px')});
`;
const SidebarHeader = styled.header`
  display: flex;
  margin-bottom: 20px;
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
  font-weight: 700;
  .univ {
    font-size: 14px;
    font-weight: 400;
    color: ${palette.grayDark};
  }
`;

export default MenuBlock;
