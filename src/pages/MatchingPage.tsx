import React, { useState } from 'react';
import styled from 'styled-components';
import {
  SuccessBox,
  WaitingBox,
  MeetingEndBox,
  DatingEndBox,
  CompleteBox,
  FailBox,
  MatchingStateTitle,
  MatchingTemplete,
} from '@/components/domain/matching';
import { Contents } from '@/lib/styles/styledComponents';
import { MeetingPartnerSurvey } from '@/types/meeting';
import { DatingPartnerSurvey } from '@/types/dating';

export type Status = 'none' | 'waiting' | 'success' | 'pay' | 'end' | 'fail';

const MatchingPage = () => {
  const [status, setStatus] = useState<Status>('fail');

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
                fail: <FailBox />,
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
                fail: <FailBox />,
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
