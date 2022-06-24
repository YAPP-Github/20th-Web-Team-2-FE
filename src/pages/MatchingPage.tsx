import CompleteBox from '@/components/domain/matching/CompleteBox';
import EndBox from '@/components/domain/matching/EndBox';
import MatchingTemplete from '@/components/domain/matching/MatchingTemplete';
import SuccessBox from '@/components/domain/matching/SuccessBox';
import WaitingBox from '@/components/domain/matching/WaitingBox';
import { Contents } from '@/lib/styles/styledComponents';
import React from 'react';
import styled from 'styled-components';

const MatchingPage = () => {
  const TempData = { state: 'end' };
  return (
    <>
      <MatchingTemplete
        IsDisable={false}
        btnName={'설문하러 가기'}
        title={
          {
            none: (
              <strong>
                성사시킬 매칭이
                <br />
                없습니다.
              </strong>
            ),
            waiting: (
              <strong>
                성사시킬
                <br />
                매칭이 없습니다.
              </strong>
            ),
            success: (
              <strong>
                매칭이
                <br />
                성사되었습니다!
              </strong>
            ),
            pay: (
              <strong>
                결제가
                <br />
                완료되었습니다!
              </strong>
            ),
            end: (
              <strong>
                매칭이
                <br />
                완료되었습니다!
              </strong>
            ),
          }[TempData.state]
        }
      >
        <MatchingContents>
          {
            {
              none: <></>,
              waiting: <WaitingBox />,
              success: <SuccessBox />,
              pay: <CompleteBox />,
              end: <EndBox />,
            }[TempData.state]
          }
        </MatchingContents>
      </MatchingTemplete>
    </>
  );
};

const MatchingContents = styled(Contents)`
  margin-top: 30px;
`;

export default MatchingPage;
