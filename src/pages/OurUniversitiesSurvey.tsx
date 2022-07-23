import React, { useMemo, useState } from 'react';
import { Title } from '@/lib/styles/styledComponents';
import { SurveyTemplate } from '@/components/domain/survey';
import { SearchSelector } from '@/components/domain/survey';
import Path from '@/router/Path';
import { useMeetingNavigate } from '@/hooks/common/useNavigate';
import { useMeetingSessionState } from '@/hooks/common';
import useUnivLoad from '@/hooks/survey/useUnivLoad';
import styled from 'styled-components';
import { palette } from '@/lib/styles/palette';

const OurUniversitiesSurvey = () => {
  const meetingNavigate = useMeetingNavigate();
  const { univs } = useUnivLoad();
  const { initMeetingState, setMeetingData } = useMeetingSessionState();
  const [ourUniversities, setOurUniversities] = useState<number[]>(initMeetingState.ourUniversities);
  const { typeOfMeeting } = initMeetingState;

  const handleNextClick = () => {
    if (initMeetingState) {
      setMeetingData({ ...initMeetingState, ourUniversities });
    }

    meetingNavigate(Path.OurDepartmentsAverageHeightSurvey);
  };

  const maxUniv = useMemo(() => {
    switch (typeOfMeeting) {
      case 'ONE':
        return 1;
      case 'TWO':
        return 2;
      case 'THREE':
        return 3;
      case 'FOUR':
        return 4;
    }
  }, [typeOfMeeting]);

  return (
    <SurveyTemplate
      disableNext={ourUniversities.length < 1}
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
        placeholder="학교를 검색하세요. (없을 시 '기타' 입력)"
        searchData={univs}
        selectedResults={ourUniversities}
        setSelectedResults={setOurUniversities}
        max={maxUniv}
      />
      <Info>
        학교가 없다고 나오나요?{' '}
        <Anchor
          target="_blank"
          href="https://docs.google.com/forms/d/e/1FAIpQLScTbXoWfKIUtgInYvEaeqDQofvQalNndwcbHMR9F4s5al0v1A/viewform?usp=sf_link"
        >
          학교 추가하기
        </Anchor>
      </Info>
    </SurveyTemplate>
  );
};

const Anchor = styled.a`
  font-weight: 700;
  text-decoration: underline;
  color: ${palette.primary};
  margin-bottom: 30px;
`;

const Info = styled.span`
  position: absolute;
  bottom: 200px;
  font-size: 12px;
  font-weight: 300;
`;

export default OurUniversitiesSurvey;
