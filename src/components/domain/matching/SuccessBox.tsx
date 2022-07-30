import { MatchingSuccess } from '@/assets/img';
import { MarginTopEle, MatchingImg, StringEle } from './WaitingBox';
import { useCountdown } from '@/hooks/common';
import useDateLabel from '@/hooks/common/useDateLabel';

interface SuccessBoxProps {
  payDeadline: string;
}

function SuccessBox({ payDeadline }: SuccessBoxProps) {
  const [days, hours, minutes, seconds] = useCountdown(payDeadline);
  const dateLabel = useDateLabel(payDeadline);

  return (
    <>
      <MatchingImg src={MatchingSuccess} alt="매칭 성공 이미지" />
      <StringEle>
        <strong>{dateLabel}</strong>까지 아래 계좌로
        <br /> <strong>1000</strong>원을 결제해주시면
        <br />
        카톡 아이디가 전달됩니다.
      </StringEle>
      <MarginTopEle>
        <strong>
          남은 시간: {days}일 {hours}시간 {minutes}분 {seconds}초
        </strong>
      </MarginTopEle>
    </>
  );
}

export default SuccessBox;
