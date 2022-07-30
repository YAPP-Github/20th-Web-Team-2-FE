import React, { useMemo, useState } from 'react';
import { useMatch } from 'react-router-dom';
import { useDatingNavigate, useMeetingNavigate } from '@/hooks/common/useNavigate';
import { SurveyTemplate } from '@/components/domain/survey';
import Path from '@/router/Path';
import { Title } from '@/lib/styles/styledComponents';
import SearchSelector from '@/components/domain/survey/SearchSelector';
import { useMeetingSessionState, useDatingSessionState } from '@/hooks/common';
import useAboardAreaLoad from '@/hooks/survey/useAboardAreaLoad';
import { LAST_MEETING_STEP, LAST_DATING_STEP } from '@/components/domain/survey/SurveyTemplate';

const AbroadAreasSurvey = () => {
  const matchMeeting = useMatch('/meeting/*');
  const { area } = useAboardAreaLoad();
  const meetingNavigate = matchMeeting ? useMeetingNavigate() : useDatingNavigate();
  const { initMeetingState, setMeetingData } = useMeetingSessionState();
  const { initDatingState, setDatingData } = useDatingSessionState();
  const [abroadAreas, setAbroadAreas] = useState<number[]>(initMeetingState.abroadAreas);
  const [abroadAreasDating, setAbroadAreasDating] = useState<number[]>(initDatingState.abroadAreas);

  const handleNextClick = () => {
    if (initMeetingState) {
      matchMeeting ? setMeetingData({ ...initMeetingState, abroadAreas }) : setDatingData({ ...initDatingState, abroadAreas: abroadAreasDating });
    }

    meetingNavigate(Path.ChannelSurvey);
  };

  const checkDisabled = useMemo(() => (matchMeeting ? abroadAreas.length === 0 : abroadAreasDating.length === 0), []);

  return (
    <SurveyTemplate
      disableNext={checkDisabled}
      hasProgressBar={true}
      currStep={matchMeeting ? 12 : 13}
      totalStep={matchMeeting ? LAST_MEETING_STEP : LAST_DATING_STEP}
      handlePrevClick={() => meetingNavigate(Path.IsAbroadSurvey)}
      handleNextClick={handleNextClick}
    >
      <Title>
        <strong>만남이 가능한 지역(도시명)</strong>을<br />
        모두 알려주세요.
      </Title>
      <SearchSelector
        placeholder="지역을 검색하세요."
        searchData={area}
        selectedResults={matchMeeting ? abroadAreas : abroadAreasDating}
        setSelectedResults={matchMeeting ? setAbroadAreas : setAbroadAreasDating}
      />
    </SurveyTemplate>
  );
};

export default AbroadAreasSurvey;
