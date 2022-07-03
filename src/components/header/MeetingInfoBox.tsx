import React from 'react';
import { Meeting } from '@/types/meeting';
import addCommaFunction from '@/utils/addCommaFunction';
import {
  conversionDepartment,
  conversionDomesticArea,
  conversionGender,
  conversionMindset,
  conversionPlay,
  conversionTypeOfMeeting,
} from '@/utils/converson';
import { FlexEle, GroupLabel, InfoBox, InfoEle, InfoLabel } from './DatingInfoBox';

interface MeetingInfoProps {
  meeting: Meeting;
}
function MeetingInfoBox({ meeting }: MeetingInfoProps) {
  const {
    ourDepartments,
    domesticAreas,
    averageAge,
    averageHeight,
    play,
    typeOfMeeting,
    mindset,
    gender,
    // 여까지 우리팀정보
    preferAge,
    preferDepartments,
    preferHeight,
  } = meeting;
  const { addComma } = addCommaFunction();
  return (
    <div>
      <GroupLabel>Team</GroupLabel>
      <InfoLabel>우리 팀 정보</InfoLabel>

      <InfoBox>
        <InfoEle>{conversionGender(gender)}</InfoEle>
        <InfoEle>{conversionTypeOfMeeting(typeOfMeeting)}</InfoEle>
        <FlexEle>
          {ourDepartments?.map((department, index) => (
            <div key={department + ourDepartments}>
              {addComma(index)}
              {conversionDepartment(department)}
            </div>
          ))}
        </FlexEle>
        <InfoEle>평균나이 : {averageAge}살</InfoEle>
        <InfoEle>평균 키 : {averageHeight}cm</InfoEle>
        <InfoEle>{conversionPlay(play)}</InfoEle>
        <FlexEle>
          {domesticAreas?.map((area, index) => (
            <div key={area + domesticAreas}>
              {addComma(index)}
              {conversionDomesticArea(area)}
            </div>
          ))}
        </FlexEle>
        <InfoEle>{conversionMindset(mindset)}</InfoEle>
      </InfoBox>
      <InfoLabel>선호 조건</InfoLabel>
      <InfoBox>
        <InfoEle>
          {preferAge[0]}~{preferAge[1]}살
        </InfoEle>
        <FlexEle>
          {preferDepartments?.map((department, index) => (
            <div key={department + preferDepartments}>
              {addComma(index)}
              {conversionDepartment(department)}
            </div>
          ))}
        </FlexEle>
        <InfoEle>
          {preferHeight[0]}~{preferHeight[1]}cm
        </InfoEle>
      </InfoBox>
    </div>
  );
}

export default MeetingInfoBox;
