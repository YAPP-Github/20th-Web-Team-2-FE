import React, { useState } from 'react';
import { SurveyTemplate, AgeBox } from '@/components/domain/survey';
import { Title } from '@/lib/styles/styledComponents';
import styled from 'styled-components';
import ChooseTwoBox from '@/components/domain/survey/ChooseTwoBox';
import { useMeetingNavigate } from '@/hooks/common/useNavigate';
import Path from '@/router/Path';
import { useNavigate } from 'react-router-dom';
import { GENDER_ITEMS } from '@/types/constants/constant';
import { useMeetingSessionState } from '@/hooks/common';
import { type Gender } from '@/types/meeting';
import { useRecoilValue } from 'recoil';
import { meetingState } from '@/atoms/meetingState';
import { conversionTypeOfMeeting } from '@/utils/converson';
import useUpdateSurvey from '@/hooks/survey/useUpdateSurvey';

const GenderAverageAgeSurvey = () => {
  const navigate = useNavigate();
  const meetingNavigate = useMeetingNavigate();
  const { initMeetingState, setMeetingData } = useMeetingSessionState();
  const { isUpdate, onUpdateMeetingSurvey } = useUpdateSurvey();
  const [genderOption, setGenderOption] = useState(initMeetingState.gender);
  const [ageOption, setAgeOption] = useState(initMeetingState.averageAge);
  const meetingData = useRecoilValue(meetingState);
  const { typeOfMeeting } = meetingData;
  const onChangeOption = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id } = e.target;
    setGenderOption(id as Gender);
  };
  const handleNextClick = () => {
    if (isUpdate) {
      onUpdateMeetingSurvey({ ...initMeetingState, gender: genderOption, averageAge: ageOption });
      navigate('/');
    } else {
      if (initMeetingState) {
        setMeetingData({ ...initMeetingState, gender: genderOption, averageAge: ageOption });
      }
      meetingNavigate(Path.OurUniversitiesSurvey);
    }
  };

  return (
    <SurveyTemplate
      disableNext={!ageOption || !genderOption}
      currStep={2}
      totalStep={14}
      handlePrevClick={() => navigate(Path.TypeOfMeetingSurvey)}
      handleNextClick={handleNextClick}
    >
      <StyledTitle>
        <strong>{conversionTypeOfMeeting(typeOfMeeting)}</strong>을 선택하셨어요.
        <br />
        몇가지 질문만 대답하시면
        <br />
        바로 매칭해드릴게요!
      </StyledTitle>
      <ChooseTwoBox items={GENDER_ITEMS} selectedOption={genderOption} onChangeOption={onChangeOption}>
        성별을 선택해주세요.
      </ChooseTwoBox>
      <AgeBox setAgeOption={setAgeOption} ageOption={ageOption}>
        참여자의 평균 나이를 알려주세요.
      </AgeBox>
    </SurveyTemplate>
  );
};

const StyledTitle = styled(Title)`
  font-weight: 400;
`;

export default GenderAverageAgeSurvey;
