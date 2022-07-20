import React, { useEffect } from 'react';
import { Modal } from '@/components/base';
import {
  conversionDepartment,
  conversionDomesticArea,
  conversionGender,
  conversionMindset,
  conversionPlay,
  conversionTypeOfMeeting,
} from '@/utils/converson';
import { FlexEle, GroupLabel, InfoBox, InfoEle, InfoLabel } from './DatingInfoBox';
import { addComma } from '@/utils/addComma';
import { getMeetingSurvey } from '@/lib/api/meeting';
import { useMeetingSessionState, useToggle } from '@/hooks/common';

function MeetingInfoBox() {
  const { initMeetingState, setMeetingData } = useMeetingSessionState();
  const [isErrorModal, onToggleErrorModal] = useToggle();
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
    kakaoId,
  } = initMeetingState;

  const getMeetingData = async () => {
    try {
      const res = await getMeetingSurvey();
      if (res) {
        setMeetingData(res);
      }
    } catch (e) {
      onToggleErrorModal();
    }
  };

  useEffect(() => {
    getMeetingData();
  }, []);

  if (kakaoId.length < 1)
    return (
      <div>
        <GroupLabel>Team</GroupLabel>
        <InfoLabel>우리 팀 정보</InfoLabel>
        <InfoBox>
          <InfoEle>설문 진행 전</InfoEle>
        </InfoBox>
      </div>
    );

  return (
    <>
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
      {isErrorModal && (
        <Modal
          width={200}
          height={140}
          bottonName="확인"
          title="알림"
          text="에러가 발생했습니다😭 다시한번 시도해 주세요!"
          onToggleModal={onToggleErrorModal}
          onClick={() => {
            void 0;
          }}
        />
      )}
    </>
  );
}

export default React.memo(MeetingInfoBox);
