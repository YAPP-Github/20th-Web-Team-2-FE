import React, { useState } from 'react';
import { useMatch, useNavigate } from 'react-router-dom';
import { SurveyTemplate } from '@/components/domain/survey';
import { Title } from '@/lib/styles/styledComponents';
import SearchSelector from '@/components/domain/survey/SearchSelector';
import { useDatingNavigate, useMeetingNavigate } from '@/hooks/common/useNavigate';
import Path from '@/router/Path';
import { useMeetingSessionState, useDatingSessionState } from '@/hooks/common';
import useUnivLoad from '@/hooks/survey/useUnivLoad';
import { LAST_MEETING_STEP, LAST_DATING_STEP } from '@/components/domain/survey/SurveyTemplate';
import useUpdateSurvey from '@/hooks/survey/useUpdateSurvey';
import useMatchingType from '@/hooks/survey/useMatchingType';

const PreferUniversitiesSurvey = () => {
  const matchMeeting = useMatch('/meeting/*');
  const [type] = useMatchingType();
  const navigate = useNavigate();
  const { isUpdate, onUpdateDatingSurvey, onUpdateMeetingSurvey } = useUpdateSurvey();
  const { univs } = useUnivLoad();
  const meetingNavigate = matchMeeting ? useMeetingNavigate() : useDatingNavigate();
  const { initMeetingState, setMeetingData } = useMeetingSessionState();
  const { initDatingState, setDatingData } = useDatingSessionState();
  const [preferUniversities, setPreferUniversities] = useState<number[]>(initMeetingState.preferUniversities);
  const [preferDatingUniversities, setPreferDatingUniversities] = useState<number[]>(initDatingState.preferUniversities);

  const handlePrevClick = () => {
    meetingNavigate(Path.AvoidUniversitiesSurvey);
  };

  const handleNextClick = () => {
    if (isUpdate) {
      type === 'meeting'
        ? onUpdateMeetingSurvey({ ...initMeetingState, preferUniversities })
        : onUpdateDatingSurvey({ ...initDatingState, preferUniversities: preferDatingUniversities });
      navigate(Path.MatchingDating);
    } else {
      if (initMeetingState) {
        matchMeeting
          ? setMeetingData({ ...initMeetingState, preferUniversities })
          : setDatingData({ ...initDatingState, preferUniversities: preferDatingUniversities });
      }
      meetingNavigate(Path.PreferAgeHeightSurvey);
    }
  };

  return (
    <SurveyTemplate
      disableNext={false}
      hasProgressBar={true}
      totalStep={matchMeeting ? LAST_MEETING_STEP : LAST_DATING_STEP}
      currStep={matchMeeting ? 6 : 8}
      handlePrevClick={handlePrevClick}
      handleNextClick={handleNextClick}
    >
      <Title>
        <strong>선호하는 학교</strong>를<br />
        모두 입력해주세요.
      </Title>
      <SearchSelector
        placeholder="학교를 검색하세요."
        searchData={univs}
        selectedResults={matchMeeting ? preferUniversities : preferDatingUniversities}
        setSelectedResults={matchMeeting ? setPreferUniversities : setPreferDatingUniversities}
      />
    </SurveyTemplate>
  );
};

export default PreferUniversitiesSurvey;
