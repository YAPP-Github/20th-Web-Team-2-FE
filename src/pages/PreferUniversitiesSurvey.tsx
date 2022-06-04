import React, { useState } from 'react';
import { SurveyTemplate } from '@/components/domain/survey';
import { Title } from '@/lib/styles/styledComponents';
import SearchSelector from '@/components/domain/survey/SearchSelector';
import { schools } from '@/mock/schools';
import useMeetingNavigate from '@/hooks/common/useMeetingNavigate';
import Path from '@/router/Path';

const PreferUniversitiesSurvey = () => {
  const meetingNavigate = useMeetingNavigate();
  const [preferUniversities, setPreferUniversities] = useState<number[]>([]);

  return (
    <SurveyTemplate
      disableNext={false}
      hasProgressBar={true}
      totalStep={15}
      currStep={6}
      handlePrevClick={() => meetingNavigate(Path.AvoidUniversitiesSurvey)}
      handleNextClick={() => meetingNavigate(Path.PreferAgeHeightSurvey)}
    >
      <Title>
        <strong>선호하는 학교</strong>를<br />
        모두 입력해주세요.
      </Title>
      <SearchSelector
        placeholder="학교를 검색하세요.(없을 시 ‘기타’ 입력)"
        searchData={schools}
        selectedResults={preferUniversities}
        setSelectedResults={setPreferUniversities}
      />
    </SurveyTemplate>
  );
};

export default PreferUniversitiesSurvey;
