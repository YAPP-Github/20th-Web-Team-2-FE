import React, { useState } from 'react';
import { useMatch } from 'react-router-dom';
import { SurveyTemplate } from '@/components/domain/survey';
import { Title } from '@/lib/styles/styledComponents';
import SearchSelector from '@/components/domain/survey/SearchSelector';
import { schools } from '@/mock/schools';
import { useDatingNavigate, useMeetingNavigate } from '@/hooks/common/useNavigate';
import Path from '@/router/Path';
import { useMeetingSessionState, useDatingSessionState } from '@/hooks/common';

const PreferUniversitiesSurvey = () => {
  const matchMeeting = useMatch('/meeting/*');
  const meetingNavigate = matchMeeting ? useMeetingNavigate() : useDatingNavigate();
  const { initMeetingState, setMeetingData } = useMeetingSessionState();
  const { initDatingState, setDatingData } = useDatingSessionState();
  const [preferUniversities, setPreferUniversities] = useState<number[]>(initMeetingState.preferUniversities);
  const [preferDatingUniversities, setPreferDatingUniversities] = useState<number[]>(initDatingState.avoidUniversities);

  const handlePrevClick = () => {
    meetingNavigate(Path.AvoidUniversitiesSurvey);
  };

  const handleNextClick = () => {
    if (initMeetingState) {
      matchMeeting
        ? setMeetingData({ ...initMeetingState, preferUniversities })
        : setDatingData({ ...initDatingState, preferUniversities: preferDatingUniversities });
    }

    meetingNavigate(Path.PreferAgeHeightSurvey);
  };

  return (
    <SurveyTemplate
      disableNext={false}
      hasProgressBar={true}
      totalStep={matchMeeting ? 14 : 12}
      currStep={matchMeeting ? 6 : 8}
      handlePrevClick={handlePrevClick}
      handleNextClick={handleNextClick}
    >
      <Title>
        <strong>선호하는 학교</strong>를<br />
        모두 입력해주세요.
      </Title>
      <SearchSelector
        placeholder="학교를 검색하세요.(없을 시 ‘other’ 입력)"
        searchData={schools}
        selectedResults={matchMeeting ? preferUniversities : preferDatingUniversities}
        setSelectedResults={matchMeeting ? setPreferUniversities : setPreferDatingUniversities}
      />
    </SurveyTemplate>
  );
};

export default PreferUniversitiesSurvey;
