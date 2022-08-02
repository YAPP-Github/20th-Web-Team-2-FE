import CompleteBox from '@/components/domain/matching/CompleteBox';
import MatchingStateTitle from '@/components/domain/matching/MatchingStateTitle';
import { MatchingTemplete, SuccessBox, WaitingBox, MeetingEndBox, DatingEndBox, FailBox, CancelBox } from '@/components/domain/matching';
import { Contents } from '@/lib/styles/styledComponents';
import React, { useState } from 'react';
import styled from 'styled-components';
import { MatchingResultResponse, MeetingPartnerSurvey } from '@/types/meeting';
import { DatingPartnerSurvey } from '@/types/dating';

export type Status = 'none' | 'waiting' | 'success' | 'femaleSuccess' | 'pay' | 'end' | 'fail' | 'cancel';

const MatchingPage = () => {
  const [status, setStatus] = useState<Status>('none');

  const handleStatus = (status: Status) => setStatus(status);

  return (
    <>
      <MatchingTemplete
        btnName={status}
        title={MatchingStateTitle(status)}
        handleStatus={handleStatus}
        meeting={(matchingResult: MatchingResultResponse) => (
          <MatchingContents>
            {
              {
                none: <></>,
                waiting: <WaitingBox />,
                success: <SuccessBox payDeadline={matchingResult.payDeadLine} />,
                femaleSuccess: <CompleteBox date={matchingResult.payDeadLine} status="femaleSuccess" />,
                pay: <CompleteBox date={matchingResult.payDeadLine} />,
                end: <MeetingEndBox {...(matchingResult.partnerSurvey as MeetingPartnerSurvey)} />,
                fail: <FailBox />,
                cancel: <CancelBox />,
              }[status]
            }
          </MatchingContents>
        )}
        dating={(matchingResult: MatchingResultResponse) => (
          <MatchingContents>
            {
              {
                none: <></>,
                waiting: <WaitingBox />,
                success: <SuccessBox payDeadline={matchingResult.payDeadLine} />,
                femaleSuccess: <CompleteBox date={matchingResult.payDeadLine} status="femaleSuccess" />,
                pay: <CompleteBox date={matchingResult.payDeadLine} />,
                end: <DatingEndBox {...(matchingResult.partnerSurvey as DatingPartnerSurvey)} />,
                fail: <FailBox />,
                cancel: <CancelBox />,
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
