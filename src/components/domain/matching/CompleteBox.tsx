import { Complete } from '@/assets/img';
import React from 'react';
import { MatchingImg, StringEle } from './WaitingBox';

function CompleteBox() {
  return (
    <>
      <MatchingImg src={Complete} alt="매칭 완료 이미지" />
      <StringEle>
        <strong>양쪽 결제 확인 후 5월 23일 오후 10시에</strong>
        <br />
        카톡 아이디가 전달됩니다.
      </StringEle>
    </>
  );
}

export default CompleteBox;
