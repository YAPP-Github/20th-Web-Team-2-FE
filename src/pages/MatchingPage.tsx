import CompleteBox from '@/components/domain/matching/CompleteBox';
import MatchingStateTitle from '@/components/domain/matching/MatchingStateTitle';
import MatchingTemplete from '@/components/domain/matching/MatchingTemplete';
import SuccessBox from '@/components/domain/matching/SuccessBox';
import WaitingBox from '@/components/domain/matching/WaitingBox';
import { Contents } from '@/lib/styles/styledComponents';
import React, { useState } from 'react';
import styled from 'styled-components';
import { MeetingPartnerSurvey } from '@/types/meeting';
import { DatingPartnerSurvey } from '@/types/dating';
import MeetingEndBox from '@/components/domain/matching/MeetingEndBox';
import DatingEndBox from '@/components/domain/matching/DatingEndBox';

export type Status = 'none' | 'waiting' | 'success' | 'pay' | 'end';

const MatchingPage = () => {
  const [status, setStatus] = useState<Status>('waiting');

  const handleStatus = (status: Status) => setStatus(status);

  return (
    <>
      <MatchingTemplete
        btnName={status}
        title={MatchingStateTitle(status)}
        handleStatus={handleStatus}
        meeting={(matchingResult: MeetingPartnerSurvey) => (
          <MatchingContents>
            {
              {
                none: <></>,
                waiting: <WaitingBox />,
                success: <SuccessBox payDeadline={matchingResult.payDeadline} />,
                pay: <CompleteBox date={matchingResult.payDeadline} />,
                end: <MeetingEndBox {...matchingResult} />,
              }[status]
            }
          </MatchingContents>
        )}
        dating={(matchingResult: DatingPartnerSurvey) => (
          <MatchingContents>
            {
              {
                none: <></>,
                waiting: <WaitingBox />,
                success: <SuccessBox payDeadline={matchingResult.payDeadline} />,
                pay: <CompleteBox date={matchingResult.payDeadline} />,
                end: <DatingEndBox {...matchingResult} />,
              }[status]
            }
          </MatchingContents>
        )}
      ></MatchingTemplete>
    </>
  );
};

const MatchingContents = styled(Contents)`
  margin-top: 30px;
`;

export default MatchingPage;
