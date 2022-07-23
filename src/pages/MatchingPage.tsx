import CompleteBox from '@/components/domain/matching/CompleteBox';
import EndBox from '@/components/domain/matching/EndBox';
import MatchingStateTitle from '@/components/domain/matching/MatchingStateTitle';
import MatchingTemplete from '@/components/domain/matching/MatchingTemplete';
import SuccessBox from '@/components/domain/matching/SuccessBox';
import WaitingBox from '@/components/domain/matching/WaitingBox';
import { Contents } from '@/lib/styles/styledComponents';
import React, { useState } from 'react';
import styled from 'styled-components';

export type Status = 'none' | 'waiting' | 'success' | 'pay' | 'end';

const MatchingPage = () => {
  const [status, setStatus] = useState<Status>('waiting');

  const handleStatus = (status: Status) => setStatus(status);

  return (
    <>
      <MatchingTemplete btnName={status} title={MatchingStateTitle(status)} handleStatus={handleStatus}>
        <MatchingContents>
          {
            {
              none: <></>,
              waiting: <WaitingBox />,
              success: <SuccessBox />,
              pay: <CompleteBox />,
              end: <EndBox />,
            }[status]
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
