import React, { useEffect, useState } from 'react';
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
import { Link } from 'react-router-dom';
import Path from '@/router/Path';

function MeetingInfoBox() {
  const { initMeetingState, setMeetingData } = useMeetingSessionState();
  const [isErrorModal, onToggleErrorModal] = useToggle();
  const [doSurvey, setDoSurvey] = useState(true);
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
  } = initMeetingState;

  useEffect(() => {
    const getMeetingData = async () => {
      try {
        const res = await getMeetingSurvey();
        if (res) {
          setMeetingData(res);
        }
      } catch (e) {
        if ((e as any).request.status === 400) {
          setDoSurvey(false);
          return;
        }
        if ((e as any).request.status === 500) {
          onToggleErrorModal();
          return;
        }
      }
    };
    getMeetingData();
  }, []);

  if (!doSurvey)
    return (
      <div>
        <GroupLabel>Team</GroupLabel>
        <InfoLabel>설문 진행 전</InfoLabel>
      </div>
    );

  return (
    <>
      <div>
        <GroupLabel>Team</GroupLabel>
        <InfoLabel>우리 팀 정보</InfoLabel>

        <InfoBox>
          <InfoEle>
            <Link to={`/updating/meeting/${Path.GenderAverageAgeSurvey}`}> {conversionGender(gender)}</Link>
          </InfoEle>
          <InfoEle>
            <Link to={`/updating/meeting/${Path.TypeOfMeeting}`}>{conversionTypeOfMeeting(typeOfMeeting)}</Link>
          </InfoEle>
          <FlexEle>
            <Link to={`/updating/meeting/${Path.OurDepartmentsAverageHeightSurvey}`}>
              {ourDepartments?.map((department, index) => (
                <div key={department + ourDepartments}>
                  {addComma(index)}
                  {conversionDepartment(department)}
                </div>
              ))}
            </Link>
          </FlexEle>
          <InfoEle>
            <Link to={`/updating/meeting/${Path.GenderAverageAgeSurvey}`}>평균나이 : {averageAge}살</Link>
          </InfoEle>
          <InfoEle>
            <Link to={`/updating/meeting/${Path.OurDepartmentsAverageHeightSurvey}`}>평균 키 : {averageHeight}cm</Link>
          </InfoEle>
          <InfoEle>
            <Link to={`/updating/meeting/${Path.PlaySurvey}`}>{conversionPlay(play)}</Link>
          </InfoEle>
          <FlexEle>
            <Link to={`/updating/meeting/${Path.DomesticAreasSurvey}`}>
              {domesticAreas?.map((area, index) => (
                <div key={area + domesticAreas}>
                  {addComma(index)}
                  {conversionDomesticArea(area)}
                </div>
              ))}
            </Link>
          </FlexEle>
          {mindset && (
            <InfoEle>
              <Link to={`/updating/meeting/${Path.MindsetSurvey}`}>{conversionMindset(mindset)} </Link>
            </InfoEle>
          )}
        </InfoBox>
        <InfoLabel>선호 조건</InfoLabel>
        <InfoBox>
          <InfoEle>
            <Link to={`/updating/meeting/${Path.PreferAgeHeightSurvey}`}>
              {preferAge[0]}~{preferAge[1]}살
            </Link>
          </InfoEle>
          <FlexEle>
            <Link to={`/updating/meeting/${Path.PreferDepartmentsSurvey}`}>
              {preferDepartments?.map((department, index) => (
                <div key={department + preferDepartments}>
                  {addComma(index)}
                  {conversionDepartment(department)}
                </div>
              ))}
            </Link>
          </FlexEle>
          <InfoEle>
            <Link to={`/updating/meeting/${Path.PreferAgeHeightSurvey}`}>
              {preferHeight[0]}~{preferHeight[1]}cm
            </Link>
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
