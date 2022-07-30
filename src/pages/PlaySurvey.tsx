import React, { useState } from 'react';
import { SurveyTemplate } from '@/components/domain/survey';
import { Title } from '@/lib/styles/styledComponents';
import { ChoiceButton } from '@/components/base';
import styled from 'styled-components';
import { PLAY_ITEMS } from '@/types/constants/play';
import Path from '@/router/Path';
import { useMeetingNavigate } from '@/hooks/common/useNavigate';
import { useMeetingSessionState } from '@/hooks/common';
import { type Play } from '@/types/meeting';
import { useNavigate } from 'react-router-dom';
import useUpdateSurvey from '@/hooks/survey/useUpdateSurvey';

const PlaySurvey = () => {
  const meetingNavigate = useMeetingNavigate();
  const navigate = useNavigate();
  const { isUpdate, onUpdateMeetingSurvey } = useUpdateSurvey();
  const { initMeetingState, setMeetingData } = useMeetingSessionState();
  const [checkedOption, setCheckedOption] = useState<Play>(initMeetingState.play);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id } = e.target;
    setCheckedOption(id as Play);
  };

  const handleNextClick = () => {
    if (isUpdate) {
      onUpdateMeetingSurvey({ ...initMeetingState, play: checkedOption });
      navigate(Path.MatchingDating);
    } else {
      if (initMeetingState) {
        setMeetingData({ ...initMeetingState, play: checkedOption });
      }
      meetingNavigate(Path.IsAbroadSurvey);
    }
  };

  return (
    <SurveyTemplate
      disableNext={!checkedOption}
      currStep={10}
      totalStep={14}
      handlePrevClick={() => meetingNavigate(Path.MindsetSurvey)}
      handleNextClick={handleNextClick}
    >
      <Title>
        <strong>술게임 여부</strong>를
        <br />
        알려주세요.
      </Title>
      <ChoiceButtonWrapper>
        {PLAY_ITEMS.map(({ name, id, text }) => (
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

export default PlaySurvey;
