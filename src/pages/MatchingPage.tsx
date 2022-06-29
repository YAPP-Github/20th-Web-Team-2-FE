import CompleteBox from '@/components/domain/matching/CompleteBox';
import EndBox from '@/components/domain/matching/EndBox';
import MatchingStateTitle from '@/components/domain/matching/MatchingStateTitle';
import MatchingTemplete from '@/components/domain/matching/MatchingTemplete';
import SuccessBox from '@/components/domain/matching/SuccessBox';
import WaitingBox from '@/components/domain/matching/WaitingBox';
import { Contents } from '@/lib/styles/styledComponents';
import React from 'react';
import styled from 'styled-components';

const MatchingPage = () => {
  const TempData = { state: 'pay' };
  return (
    <>
      <MatchingTemplete btnName={TempData.state} title={MatchingStateTitle(TempData.state)}>
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
