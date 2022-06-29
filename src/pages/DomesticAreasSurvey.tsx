import React, { useState, useMemo } from 'react';
import { ChooseFourBox, SurveyTemplate } from '@/components/domain/survey';
import { ChooseFourBoxItemProps } from '@/components/domain/survey/ChooseFourBox';
import { Title } from '@/lib/styles/styledComponents';
import { DOMESTICAREAS_ITEMS } from '@/types/constants/area';
import styled from 'styled-components';
import { FormWrapper } from './AuthMail';
import Path from '@/router/Path';
import { useMeetingNavigate } from '@/hooks/common/useNavigate';
import { useMeetingSessionState } from '@/hooks/common';
import { type DomesticAreas } from '@/types/meeting';

const DomesticAreasSurvey = () => {
  const meetingNavigate = useMeetingNavigate();
  const { initMeetingState, setMeetingData } = useMeetingSessionState();
  const getInitDomesticAreas = DOMESTICAREAS_ITEMS.map((item) => {
    return { ...item, checked: initMeetingState.domesticAreas.some((initState) => initState === item.id) };
  });
  const initDomesticAreas = useMemo(() => getInitDomesticAreas, [DOMESTICAREAS_ITEMS, initMeetingState]);
  const [checkedMultiOption, setMultiCheckedOption] = useState<ChooseFourBoxItemProps[]>(initDomesticAreas);
  const isChecked = useMemo(() => checkedMultiOption.some(({ checked }) => checked), [checkedMultiOption]);
  const getDomesticAreas = checkedMultiOption.reduce<DomesticAreas[]>((prev, cur) => {
    if (cur.checked) {
      prev.push(cur.id as DomesticAreas);
    }
    return prev;
  }, []);
  const domesticAreas = useMemo(() => getDomesticAreas, [checkedMultiOption]);

  const handleNextClick = () => {
    if (initMeetingState) {
      setMeetingData({ ...initMeetingState, domesticAreas: domesticAreas ?? [] });
    }

    meetingNavigate(Path.ChannelSurvey);
  };

  return (
    <SurveyTemplate
      disableNext={!isChecked}
      currStep={12}
      totalStep={14}
      handlePrevClick={() => meetingNavigate(Path.IsAbroadSurvey)}
      handleNextClick={handleNextClick}
    >
      <Title>
        <strong>미팅이 가능한 지역</strong>을
        <br />
        모두 알려주세요.
      </Title>
      <BtnWrapper>
        <ChooseFourBox
          height={72}
          width={72}
          isMulti
          items={DOMESTICAREAS_ITEMS}
          checkedMultiOption={checkedMultiOption}
          setMultiCheckedOption={setMultiCheckedOption}
        >
          복수 선택이 가능합니다.
        </ChooseFourBox>
      </BtnWrapper>
    </SurveyTemplate>
  );
};

const BtnWrapper = styled(FormWrapper)`
  top: 30%;
`;

export default DomesticAreasSurvey;
