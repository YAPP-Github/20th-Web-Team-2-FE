import React from 'react';
import { Waiting } from '@/assets/img';
import styled from 'styled-components';

function WaitingBox() {
  return (
    <>
      <MatchingImg src={Waiting} alt="매칭 대기 이미지" />
      <StringEle>
        <strong>매칭은 매일밤 11시에 이루어집니다.</strong>
        <br />
        매칭이 되면 카톡과 이메일로 링크를 보내드릴게요.
      </StringEle>
      <MarginTopEle>
        랜덤매칭으로 이상형 반영없이 <br /> 바로 매칭받을 수 있어요
      </MarginTopEle>
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
