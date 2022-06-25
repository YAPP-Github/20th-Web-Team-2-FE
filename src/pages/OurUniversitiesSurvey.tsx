import React, { useState } from 'react';
import { Title } from '@/lib/styles/styledComponents';
import { SurveyTemplate } from '@/components/domain/survey';
import SearchSelector from '@/components/domain/survey/SearchSelector';
import { schools } from '@/mock/schools';
import Path from '@/router/Path';
import { useMeetingNavigate } from '@/hooks/common/useMeetingNavigate';

const OurUniversitiesSurvey = () => {
  const meetingNavigate = useMeetingNavigate();
  const [ourUniversities, setOurUniversities] = useState<number[]>([]);

  return (
    <SurveyTemplate
      disableNext={false}
      hasProgressBar={true}
      totalStep={14}
      currStep={3}
      handlePrevClick={() => meetingNavigate(Path.GenderAverageAgeSurvey)}
      handleNextClick={() => meetingNavigate(Path.OurDepartmentsAverageHeightSurvey)}
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
