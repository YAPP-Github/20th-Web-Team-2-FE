import React, { useState } from 'react';
import { Title } from '@/lib/styles/styledComponents';
import { SurveyTemplate } from '@/components/domain/survey';
import SearchSelector from '@/components/domain/survey/SearchSelector';
import { schools } from '@/mock/schools';
import Path from '@/router/Path';
import { useMeetingNavigate } from '@/hooks/common/useMeetingNavigate';
import { useMeetingSessionState } from '@/hooks/common';

const OurUniversitiesSurvey = () => {
  const meetingNavigate = useMeetingNavigate();
  const [ourUniversities, setOurUniversities] = useState<number[]>([]);
  const { initMeetingState, setMeetingData } = useMeetingSessionState();

  // @TODO: SearchSelector에서 id, name으로 구분하지 않고 상위에서 구분해야 함.
  // selectedResults를 상위에서 받아서 초기화해야 하는데 문자열로 받아지게 되어 있음.
  const handleNextClick = () => {
    if (initMeetingState) {
      setMeetingData({ ...initMeetingState, ourUniversities });
    }

    meetingNavigate(Path.OurDepartmentsAverageHeightSurvey);
  };

  return (
    <SurveyTemplate
      disableNext={false}
      hasProgressBar={true}
      totalStep={14}
      currStep={3}
      handlePrevClick={() => meetingNavigate(Path.GenderAverageAgeSurvey)}
      handleNextClick={handleNextClick}
    >
      <Title>
        <strong>참여자의 학교</strong>를<br />
        모두 입력해주세요.
      </Title>
      <SearchSelector
        placeholder="학교를 검색하세요.(없을 시 ‘other’ 입력)"
        searchData={schools}
        selectedResults={ourUniversities}
        setSelectedResults={setOurUniversities}
      />
    </SurveyTemplate>
  );
};

export default OurUniversitiesSurvey;
