import CompleteBox from '@/components/domain/matching/CompleteBox';
import MatchingStateTitle from '@/components/domain/matching/MatchingStateTitle';
import { MatchingTemplete, SuccessBox, WaitingBox, MeetingEndBox, DatingEndBox, FailBox, CancelBox } from '@/components/domain/matching';
import { Contents } from '@/lib/styles/styledComponents';
import React, { useState } from 'react';
import styled from 'styled-components';
import { MatchingResultResponse, MeetingPartnerSurvey } from '@/types/meeting';
import { DatingPartnerSurvey } from '@/types/dating';
import useMatchingType from '@/hooks/survey/useMatchingType';

export type Status = 'none' | 'waiting' | 'success' | 'femaleSuccess' | 'pay' | 'end' | 'fail' | 'cancel';

export interface MatchingStatus {
  meeting: Status;
  dating: Status;
}

const MatchingPage = () => {
  const [type] = useMatchingType();

  const [status, setStatus] = useState<MatchingStatus>({
    meeting: 'none',
    dating: 'none',
  });

  const handleStatus = (status: Status) => {
    setStatus((prev) => ({ ...prev, [type]: status }));
  };

  return (
    <>
      <MatchingTemplete
        btnName={status[type]}
        title={MatchingStateTitle(status[type])}
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
              }[status[type]]
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
              }[status[type]]
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
