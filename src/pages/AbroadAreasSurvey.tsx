import React, { useState } from 'react';
import { useMatch } from 'react-router-dom';
import { useDatingNavigate, useMeetingNavigate } from '@/hooks/common/useNavigate';
import { SurveyTemplate } from '@/components/domain/survey';
import Path from '@/router/Path';
import { Title } from '@/lib/styles/styledComponents';
import SearchSelector from '@/components/domain/survey/SearchSelector';
import { schools } from '@/mock/schools';
import { useMeetingSessionState } from '@/hooks/common';

const AbroadAreasSurvey = () => {
  const matchMeeting = useMatch('/meeting/*');
  const meetingNavigate = matchMeeting ? useMeetingNavigate() : useDatingNavigate();
  const { initMeetingState, setMeetingData } = useMeetingSessionState();
  const [abroadAreas, setAbroadAreas] = useState<number[]>(initMeetingState.abroadAreas);

  const handleNextClick = () => {
    if (initMeetingState) {
      setMeetingData({ ...initMeetingState, abroadAreas });
    }

    meetingNavigate(Path.ChannelSurvey);
  };

  return (
    <SurveyTemplate
      disableNext={false}
      hasProgressBar={true}
      totalStep={matchMeeting ? 14 : 12}
      currStep={matchMeeting ? 12 : 7}
      handlePrevClick={() => meetingNavigate(Path.IsAbroadSurvey)}
      handleNextClick={handleNextClick}
    >
      <Title>
        <strong>미팅이 가능한 지역(도시)</strong>을<br />
        모두 알려주세요.
      </Title>
      <SearchSelector placeholder="지역을 검색하세요." searchData={schools} selectedResults={abroadAreas} setSelectedResults={setAbroadAreas} />
    </SurveyTemplate>
  );
};

export default AbroadAreasSurvey;
