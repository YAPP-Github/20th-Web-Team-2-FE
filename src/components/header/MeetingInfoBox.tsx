import { Meeting } from '@/types/meeting';
import React from 'react';
import { GroupLabel, InfoBox, InfoEle, InfoLabel } from './DatingInfoBox';

interface MeetingInfoProps {
  meeting: Meeting;
}
function MeetingInfoBox({ meeting }: MeetingInfoProps) {
  const {
    ourUniversities,
    ourDepartments,
    domesticAreas,
    averageAge,
    averageHeight,
    play,
    typeOfMeeting,
    // 여까지 우리팀정보
    preferAge,
    preferDepartments,
    preferHeight,
    preferUniversities,
  } = meeting;
  return (
    <div>
      <GroupLabel>Team</GroupLabel>
      <InfoLabel>우리 팀 정보</InfoLabel>
      <InfoBox>
        <InfoEle>{ourUniversities}</InfoEle>
        <InfoEle>{typeOfMeeting}</InfoEle>
        <InfoEle>{ourDepartments}</InfoEle>
        <InfoEle>{averageAge}</InfoEle>
        <InfoEle>{averageHeight}cm</InfoEle>
        <InfoEle>{play}</InfoEle>
        {domesticAreas && <InfoEle>{domesticAreas}</InfoEle>}
      </InfoBox>
      <InfoLabel>선호 조건</InfoLabel>
      <InfoBox>
        <InfoEle>{preferAge}살</InfoEle>
        <InfoEle>{preferDepartments}</InfoEle>
        <InfoEle>{preferHeight}</InfoEle>
        <InfoEle>{preferUniversities}</InfoEle>
      </InfoBox>
    </div>
  );
}

export default MeetingInfoBox;
