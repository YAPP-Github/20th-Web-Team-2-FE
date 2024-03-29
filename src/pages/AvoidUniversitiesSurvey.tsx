import React, { useState } from 'react';
import { useMatch, useNavigate } from 'react-router-dom';
import { SurveyTemplate } from '@/components/domain/survey';
import { Title } from '@/lib/styles/styledComponents';
import SearchSelector from '@/components/domain/survey/SearchSelector';
import styled from 'styled-components';
import Path from '@/router/Path';
import { useDatingNavigate, useMeetingNavigate } from '@/hooks/common/useNavigate';
import { useMeetingSessionState, useDatingSessionState } from '@/hooks/common';
import useUnivLoad from '@/hooks/survey/useUnivLoad';
import { LAST_MEETING_STEP, LAST_DATING_STEP } from '@/components/domain/survey/SurveyTemplate';
import useUpdateSurvey from '@/hooks/survey/useUpdateSurvey';
import useMatchingType from '@/hooks/survey/useMatchingType';

const AvoidUniversitiesSurvey = () => {
  const matchMeeting = useMatch('/meeting/*');
  const { univs } = useUnivLoad();
  const [type] = useMatchingType();
  const navigate = useNavigate();
  const { isUpdate, onUpdateDatingSurvey, onUpdateMeetingSurvey } = useUpdateSurvey();
  const meetingNavigate = matchMeeting ? useMeetingNavigate() : useDatingNavigate();
  const { initMeetingState, setMeetingData } = useMeetingSessionState();
  const { initDatingState, setDatingData } = useDatingSessionState();
  const [avoidUniversities, setAvoidUniversities] = useState(initMeetingState.avoidUniversities);
  const [avoidDatingUniversities, setAvoidDatingUniversities] = useState(initDatingState.avoidUniversities);

  const handlePrevClick = () => {
    meetingNavigate(matchMeeting ? Path.OurDepartmentsAverageHeightSurvey : Path.MyDateCount);
  };

  const handleNextClick = () => {
    if (isUpdate) {
      type === 'meeting'
        ? onUpdateMeetingSurvey({ ...initMeetingState, avoidUniversities })
        : onUpdateDatingSurvey({ ...initDatingState, avoidUniversities: avoidDatingUniversities });
      navigate(Path.MatchingDating);
    } else {
      if (initMeetingState) {
        matchMeeting
          ? setMeetingData({ ...initMeetingState, avoidUniversities })
          : setDatingData({ ...initDatingState, avoidUniversities: avoidDatingUniversities });
      }
      meetingNavigate(Path.PreferUniversitiesSurvey);
    }
  };

  return (
    <SurveyTemplate
      disableNext={false}
      hasProgressBar={true}
      totalStep={matchMeeting ? LAST_MEETING_STEP : LAST_DATING_STEP}
      currStep={matchMeeting ? 5 : 7}
      handlePrevClick={handlePrevClick}
      handleNextClick={handleNextClick}
    >
      <Title>
        <strong>기피하는 학교</strong>를<br />
        모두 입력해주세요.
      </Title>
      <SearchSelector
        placeholder="학교를 검색하세요."
        searchData={univs}
        selectedResults={matchMeeting ? avoidUniversities : avoidDatingUniversities}
        setSelectedResults={matchMeeting ? setAvoidUniversities : setAvoidDatingUniversities}
      />
      <Description>
        ※ 참여 인원이 부족할 경우 기피학교와
        <br />
        매칭될 수 있습니다.
      </Description>
    </SurveyTemplate>
  );
};

const Description = styled.p`
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  color: rgba(0, 0, 0, 0.6);
  position: absolute;
  bottom: 163px;
`;

export default AvoidUniversitiesSurvey;
