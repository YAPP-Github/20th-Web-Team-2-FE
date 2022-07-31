import React from 'react';
import styled from 'styled-components';
import Lottie from 'lottie-react';
import { waitingAnimation } from '@/assets/lotties';

function WaitingBox() {
  return (
    <WaitingBoxBlock>
      <LottieWrapper>
        <Lottie animationData={waitingAnimation} alt="매칭 성사 대기중 이미지" title="매칭 성사 대기중 이미지" />
      </LottieWrapper>
      <StringEle>
        매칭은 <strong>매일밤 10시</strong>에 이루어집니다.
        <br />
        매칭이 되면 이메일로 링크를 보내드릴게요.
      </StringEle>
    </WaitingBoxBlock>
  );
}

const WaitingBoxBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StringEle = styled.p`
  line-height: 26px;
`;
export const MarginTopEle = styled.p`
  margin-top: 50px;
  line-height: 22px;
`;

export const LottieWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background: rgb(75, 217, 195);
  background: linear-gradient(0deg, rgba(75, 217, 195, 0.8) 20%, rgba(189, 237, 254, 1) 55%, rgba(206, 248, 254, 1) 100%);
  border-radius: 12px;
  width: 140px;
  height: 140px;
  margin-bottom: 20px;

  > div {
    transform: scale(1.35);
  }
`;

export default WaitingBox;
