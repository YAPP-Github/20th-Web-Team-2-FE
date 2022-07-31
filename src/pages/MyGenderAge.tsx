import React, { useState } from 'react';
import Path from '@/router/Path';
import { useNavigate } from 'react-router-dom';
import { SurveyTemplate, AgeBox } from '@/components/domain/survey';
import { Title } from '@/lib/styles/styledComponents';
import styled from 'styled-components';
import ChooseTwoBox from '@/components/domain/survey/ChooseTwoBox';
import { useDatingNavigate } from '@/hooks/common/useNavigate';
import { useDatingSessionState } from '@/hooks/common';
import { GENDER_ITEMS } from '@/types/constants/constant';
import { type Gender } from '@/types/meeting';
import useUpdateSurvey from '@/hooks/survey/useUpdateSurvey';
import { LAST_DATING_STEP } from '@/components/domain/survey/SurveyTemplate';

const MyGenderAge = () => {
  const navigate = useNavigate();
  const { isUpdate, onUpdateDatingSurvey } = useUpdateSurvey();
  const datingNavigate = useDatingNavigate();
  const { initDatingState, setDatingData } = useDatingSessionState();
  const [gender, setGender] = useState(initDatingState.gender);
  const [age, setAge] = useState(initDatingState.age);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id } = e.target;
    setGender(id as Gender);
  };

  const handleNextClick = () => {
    if (isUpdate) {
      onUpdateDatingSurvey({ ...initDatingState, gender, age });
      navigate(Path.MatchingDating);
    } else {
      if (initDatingState) {
        setDatingData({ ...initDatingState, gender, age });
      }
      datingNavigate(Path.MyDepartmentCharacter);
    }
  };

  return (
    <SurveyTemplate
      disableNext={!age && !gender}
      currStep={2}
      totalStep={LAST_DATING_STEP}
      handlePrevClick={() => navigate(Path.TypeOfMeetingSurvey)}
      handleNextClick={handleNextClick}
    >
      <StyledTitle>
        <strong>1:1 소개팅</strong>을 선택하셨어요.
        <br />
        몇가지 질문만 대답하시면
        <br />
        바로 매칭해드릴게요!
      </StyledTitle>
      <ChooseTwoBox items={GENDER_ITEMS} selectedOption={gender} onChangeOption={onChange}>
        성별을 선택해주세요.
      </ChooseTwoBox>
      <AgeBox ageOption={age} setAgeOption={setAge}>
        본인의 나이를 알려주세요
      </AgeBox>
    </SurveyTemplate>
  );
};

const StyledTitle = styled(Title)`
  font-weight: 400;
`;

export default MyGenderAge;
