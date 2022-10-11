import { Complete } from '@/assets/img';
import React from 'react';
import { MatchingImg, StringEle } from './WaitingBox';
import useDateLabel from '@/hooks/common/useDateLabel';

type CompleteType = 'pay' | 'femaleSuccess';

interface CompleteBoxProps {
  date: string;
  status?: CompleteType;
}

function CompleteBox({ date, status = 'pay' }: CompleteBoxProps) {
  const dateLabel = useDateLabel(date);

  return (
    <>
      <MatchingImg src={Complete} alt="매칭 완료 이미지" />
      <StringEle>
        <strong>
          {status === 'femaleSuccess' && '상대 '}결제 확인 후 {dateLabel}
        </strong>
        에
        <br />
        카톡 아이디가 전달됩니다.
      </StringEle>
    </>
  );
}

export default CompleteBox;
