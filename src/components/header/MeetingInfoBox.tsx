import { Meeting } from '@/types/meeting';
import React from 'react';
import { GroupLabel, InfoLabel } from './DatingInfoBox';

interface MeetingInfoProps {
  meeting: Meeting;
}
function MeetingInfoBox({ meeting }: MeetingInfoProps) {
  const { abroadAreas } = meeting;
  return (
    <div>
      <GroupLabel>Me</GroupLabel>
      <InfoLabel>우리 팀 정보</InfoLabel>
      {abroadAreas}
      <InfoLabel>나의 정보</InfoLabel>
    </div>
  );
}

export default MeetingInfoBox;
