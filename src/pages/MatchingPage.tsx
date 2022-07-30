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
import FailBox from '@/components/domain/matching/FailBox';

export type Status = 'none' | 'waiting' | 'success' | 'femaleSuccess' | 'pay' | 'end' | 'fail';

const MatchingPage = () => {
  const [status, setStatus] = useState<Status>('none');

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
                femaleSuccess: <CompleteBox date={matchingResult.payDeadline} status="femaleSuccess" />,
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
                femaleSuccess: <CompleteBox date={matchingResult.payDeadline} status="femaleSuccess" />,
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
