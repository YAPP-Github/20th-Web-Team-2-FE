import React, { useState } from 'react';
import { SurveyTemplate } from '@/components/domain/survey';
import { Title } from '@/lib/styles/styledComponents';
import { ChoiceButton } from '@/components/base';
import styled from 'styled-components';
import { MINDSET_ITEMS } from '@/types/constants/constant';
import Path from '@/router/Path';
import { useMeetingNavigate } from '@/hooks/common/useNavigate';
import { useMeetingSessionState } from '@/hooks/common';
import { type MindSet } from '@/types/meeting';
import { useNavigate } from 'react-router-dom';
import useUpdateSurvey from '@/hooks/survey/useUpdateSurvey';
import { LAST_MEETING_STEP } from '@/components/domain/survey/SurveyTemplate';

const MindsetSurvey = () => {
  const meetingNavigate = useMeetingNavigate();
  const navigate = useNavigate();
  const { isUpdate, onUpdateMeetingSurvey } = useUpdateSurvey();
  const { initMeetingState, setMeetingData } = useMeetingSessionState();
  const [checkedOption, setCheckedOption] = useState<MindSet>(initMeetingState.mindSet);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id } = e.target;
    setCheckedOption(id as MindSet);
  };

  const handleNextClick = () => {
    if (isUpdate) {
      onUpdateMeetingSurvey({ ...initMeetingState, mindSet: checkedOption });
      navigate(Path.MatchingDating);
    } else {
      if (initMeetingState) {
        setMeetingData({ ...initMeetingState, mindSet: checkedOption });
      }
      meetingNavigate(Path.PlaySurvey);
    }
  };
  return (
    <SurveyTemplate
      disableNext={!checkedOption}
      currStep={9}
      totalStep={LAST_MEETING_STEP}
      handlePrevClick={() => meetingNavigate(Path.PreferDepartmentsSurvey)}
      handleNextClick={handleNextClick}
    >
      <Title>
        <strong>미팅의 마인드셋</strong>을
        <br />
        알려주세요.
      </Title>
      <ChoiceButtonWrapper>
        {MINDSET_ITEMS.map(({ name, id, text }) => (
          <ChoiceButton
            name={name}
            size="medium"
            variant="grayBlack"
            id={id}
            onChange={handleChange}
            key={id}
            checked={checkedOption === id}
            height={70}
          >
            {text}
          </ChoiceButton>
        ))}
      </ChoiceButtonWrapper>
    </SurveyTemplate>
  );
};

const ChoiceButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 71px;
`;

export default MindsetSurvey;
