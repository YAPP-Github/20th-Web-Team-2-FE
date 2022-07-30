import React from 'react';
import { Waiting } from '@/assets/img';
import styled from 'styled-components';

function WaitingBox() {
  return (
    <>
      <MatchingImg src={Waiting} alt="매칭 대기 이미지" />
      <StringEle>
        매칭은 <strong>매일밤 10시</strong>에 이루어집니다.
        <br />
        매칭이 되면 카톡과 이메일로 링크를 보내드릴게요.
      </StringEle>
    </>
  );
}

export const MatchingImg = styled.img`
  width: 140px;
  margin-bottom: 20px;
`;
export const StringEle = styled.p`
  line-height: 26px;
`;
export const MarginTopEle = styled.p`
  margin-top: 50px;
  line-height: 22px;
`;

export default WaitingBox;
