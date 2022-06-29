import React, { useState } from 'react';
import { useMatch } from 'react-router-dom';
import { SurveyTemplate } from '@/components/domain/survey';
import { Title } from '@/lib/styles/styledComponents';
import SearchSelector from '@/components/domain/survey/SearchSelector';
import { schools } from '@/mock/schools';
import styled from 'styled-components';
import Path from '@/router/Path';
import { useDatingNavigate, useMeetingNavigate } from '@/hooks/common/useNavigate';
import { useMeetingSessionState } from '@/hooks/common';

const AvoidUniversitiesSurvey = () => {
  const matchMeeting = useMatch('/meeting/*');
  const meetingNavigate = matchMeeting ? useMeetingNavigate() : useDatingNavigate();
  const { initMeetingState, setMeetingData } = useMeetingSessionState();
  const [avoidUniversities, setAvoidUniversities] = useState<number[]>(initMeetingState.avoidUniversities);

  const handleNextClick = () => {
    if (initMeetingState) {
      setMeetingData({ ...initMeetingState, avoidUniversities });
    }

    meetingNavigate(Path.PreferUniversitiesSurvey);
  };

  return (
    <SurveyTemplate
      disableNext={false}
      hasProgressBar={true}
      totalStep={matchMeeting ? 14 : 12}
      currStep={matchMeeting ? 5 : 7}
      handlePrevClick={() => meetingNavigate(Path.OurDepartmentsAverageHeightSurvey)}
      handleNextClick={handleNextClick}
    >
      <Title>
        <strong>기피하는 학교</strong>를<br />
        모두 입력해주세요.
      </Title>
      <SearchSelector
        placeholder="학교를 검색하세요.(없을 시 ‘other’ 입력)"
        searchData={schools}
        selectedResults={avoidUniversities}
        setSelectedResults={setAvoidUniversities}
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
