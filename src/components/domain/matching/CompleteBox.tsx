import { Complete } from '@/assets/img';
import React from 'react';
import { MatchingImg, StringEle } from './WaitingBox';
import useDateLabel from '@/hooks/common/useDateLabel';

interface CompleteBoxProps {
  date: string;
}

function CompleteBox({ date }: CompleteBoxProps) {
  const dateLabel = useDateLabel(date);

  return (
    <>
      <MatchingImg src={Complete} alt="매칭 완료 이미지" />
      <StringEle>
        <strong>결제 확인 후 {dateLabel}에</strong>
        <br />
        카톡 아이디가 전달됩니다.
      </StringEle>
    </>
  );
}

export default CompleteBox;
