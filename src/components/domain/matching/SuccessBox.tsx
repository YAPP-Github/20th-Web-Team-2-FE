import { MatchingSuccess } from '@/assets/img';
import React from 'react';
import { MarginTopEle, MatchingImg, StringEle } from './WaitingBox';

function SuccessBox() {
  return (
    <>
      <MatchingImg src={MatchingSuccess} alt="매칭 성공 이미지" />
      <StringEle>
        <strong>5월 3일 22시</strong>까지 <strong>1,0000</strong>원을 결제해주시면
        <br />
        카톡 아이디가 전달됩니다.
      </StringEle>
      <MarginTopEle>
        <strong>남은 시간: 1일 01시가 12분 33초</strong>
      </MarginTopEle>
    </>
  );
}

export default SuccessBox;
