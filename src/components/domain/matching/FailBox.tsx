import React from 'react';
import { MatchingFail } from '@/assets/img';
import { MatchingImg, StringEle } from './WaitingBox';
import styled from 'styled-components';

function FailBox() {
  return (
    <>
      <MatchingImg src={MatchingFail} alt="매칭 실패 이미지" />
      <StringEle>
        상대방이 결제하지 않아
        <br />
        매칭에 실패하였습니다.
        <br />
        다시 매칭할까요?
      </StringEle>
      <ActionButtons>
        <button>
          <span>후기작성</span>
        </button>
        <button>신고하기</button>
      </ActionButtons>
    </>
  );
}

const ActionButtons = styled.div`
  display: flex;
  justify-content: space-around;
  height: 28px;
  font-size: 12px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.6);
  margin-top: 32px;

  button {
    width: 100%;

    &:first-of-type {
      span {
        display: inline-block;
        width: 100%;
        border-right: 1px solid #000;
      }
    }
  }
`;

export default FailBox;
