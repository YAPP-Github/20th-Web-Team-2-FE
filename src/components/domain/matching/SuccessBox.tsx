import { MatchingSuccess } from '@/assets/img';
import { MarginTopEle, MatchingImg, StringEle } from './WaitingBox';

interface SuccessBoxProps {
  payDeadline: string;
}

function SuccessBox({ payDeadline }: SuccessBoxProps) {
  return (
    <>
      <MatchingImg src={MatchingSuccess} alt="매칭 성공 이미지" />
      <StringEle>
        <strong>{payDeadline}</strong>까지 <strong>10,000</strong>원을 결제해주시면
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
