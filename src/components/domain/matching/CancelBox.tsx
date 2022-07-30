import { MatchingFail } from '@/assets/img';
import styled from 'styled-components';

function CancelBox() {
  return (
    <>
      <>
        <MatchingImg src={MatchingFail} alt="매칭 실패 이미지" />
        <StringEle>
          매칭이 성사되었으나
          <br />
          상대방이 서비스를 탈퇴하여
          <br />
          매칭이 취소되었습니다.
          <br />
          지불하신 금액은 <strong>1영업일</strong> 이내 환불됩니다.
        </StringEle>
        <Actions>
          <ReviewLink
            href="https://docs.google.com/forms/d/e/1FAIpQLSeSnI-tB9acPtCepl-FM8cCTF-uezGOJ5SjwFOdQ6DT92xjmQ/viewform?usp=sf_link"
            target="_blank"
          >
            후기작성
          </ReviewLink>
          <ReportLink
            href="https://docs.google.com/forms/d/e/1FAIpQLSfTSBwk6bb0ywTBoHu4cZM1gV8DN0OjMB4jVFvdzbYDrjnJdg/viewform?usp=sf_link"
            target="_blank"
          >
            신고하기
          </ReportLink>
        </Actions>
      </>
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

export const Actions = styled.div`
  display: flex;
  margin-top: 18px;

  & > a {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.6);
    width: 100%;
    height: 28px;
  }
`;

const ReviewLink = styled.a`
  position: relative;
  &:after {
    position: absolute;
    right: 0;
    content: '';
    width: 1px;
    height: 15px;
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

const ReportLink = styled.a``;

export default CancelBox;
